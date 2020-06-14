import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import MagicDropzone from "react-magic-dropzone";
import models from "@cloud-annotations/models";

import styles from "./App.module.css";
import "./styles.css";

import QuestionList from "./components/questions"

const getRetinaContext = canvas => {
    const ctx = canvas.getContext("2d");
    const scale = window.devicePixelRatio;
    let width = canvas.width / scale;
    let height = canvas.height / scale;
    return {
        setWidth: w => {
            width = w;
            canvas.style.width = w + "px";
            canvas.width = w * scale;
        },
        setHeight: h => {
            height = h;
            canvas.style.height = h + "px";
            canvas.height = h * scale;
        },
        width: width,
        height: height,
        clearAll: () => {
            return ctx.clearRect(0, 0, width * scale, height * scale);
        },
        clearRect: (x, y, width, height) => {
            return ctx.clearRect(x * scale, y * scale, width * scale, height * scale);
        },
        setFont: font => {
            const size = parseInt(font, 10) * scale;
            const retinaFont = font.replace(/^\d+px/, size + "px");
            ctx.font = retinaFont;
        },
        setTextBaseLine: textBaseline => {
            ctx.textBaseline = textBaseline;
        },
        setStrokeStyle: strokeStyle => {
            ctx.strokeStyle = strokeStyle;
        },
        setLineWidth: lineWidth => {
            ctx.lineWidth = lineWidth * scale;
        },
        strokeRect: (x, y, width, height) => {
            return ctx.strokeRect(
                x * scale,
                y * scale,
                width * scale,
                height * scale
            );
        },
        setFillStyle: fillStyle => {
            ctx.fillStyle = fillStyle;
        },
        measureText: text => {
            const metrics = ctx.measureText(text);
            return {
                width: metrics.width / scale,
                actualBoundingBoxLeft: metrics.actualBoundingBoxLeft / scale,
                actualBoundingBoxRight: metrics.actualBoundingBoxRight / scale,
                actualBoundingBoxAscent: metrics.actualBoundingBoxAscent / scale,
                actualBoundingBoxDescent: metrics.actualBoundingBoxDescent / scale
            };
        },
        fillRect: (x, y, width, height) => {
            return ctx.fillRect(x * scale, y * scale, width * scale, height * scale);
        },
        fillText: (text, x, y) => {
            return ctx.fillText(text, x * scale, y * scale);
        }
    };
};

const ImageUpload = ({ setPrediction }) => {
    const [model, setModel] = useState(undefined);
    const [preview, setPreview] = useState(undefined);
    const [resultsCanvas, setResultsCanvas] = useState(undefined);

    useEffect(() => {
        models.load("/model_web").then(async model => {
            // warm up the model
            const image = new ImageData(1, 1);
            await model.classify(image);
            setModel(model);
        });
    }, []);

    useEffect(() => {
        setPreview(undefined);
        if (resultsCanvas) {
            const ctx = getRetinaContext(resultsCanvas);
            ctx.clearAll();
            ctx.setWidth(0);
            ctx.setHeight(0);
        }
    }, [model, resultsCanvas]); // if model changes kill preview.

    const onDrop = useCallback((accepted, _, links) => {
        setPreview(accepted[0].preview || links[0]);
    }, []);

    const onImageChange = useCallback(
        async e => {
            const imgWidth = e.target.clientWidth;
            const imgHeight = e.target.clientHeight;

            const ctx = getRetinaContext(resultsCanvas);
            ctx.setWidth(imgWidth);
            ctx.setHeight(imgHeight);

            const predictions = await model.classify(e.target);

            var arr = []
            predictions
                .filter(prediction => prediction.score > 0.5)
                .forEach((prediction, i) => {
                    const label = `${prediction.label} ${(prediction.score * 100).toFixed(
                        1
                    )}%`;
                    arr.push(label);
                });
            setPrediction(arr);
        },
        [model, resultsCanvas, setPrediction]
    );

    return (
        <MagicDropzone
            className={styles.dropzone}
            accept="image/jpeg, image/png, .jpg, .jpeg, .png"
            multiple={false}
            onDrop={onDrop}
        >

            {preview ? (
                <div className={styles.imageWrapper}>
                    <img
                        alt="upload preview"
                        onLoad={onImageChange}
                        className={styles.image}
                        src={preview}
                    />
                </div>
            ) : model !== undefined ? (
                "Tap to Upload Image"
            ) : (
                "Loading model..."
            )}
            <canvas ref={setResultsCanvas} className={styles.canvas} />
        </MagicDropzone>
    );
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prediction: null,
        };
    }

    setPrediction(prediction) {
        this.setState({
            prediction: prediction,
        });
    }

    renderPrediction() {
        let prediction = this.state.prediction;
        if (!prediction) return null;
        return prediction.map((predict) => {
            return (
                <div>{predict}</div>
            )
        })
    }

    render() {
        return (
            <div>
                <ImageUpload setPrediction={(prediction) => this.setPrediction(prediction)} />
                {this.renderPrediction()}
            </div>
        )
    }
}

class Questions extends React.Component {
    render() {
        return (
            <div style={{ padding: 30}}>
                <div style={{ padding: 10 }}>
                    <QuestionList question='Is he breathing lightly?' tag='Q1' />
                </div>
                <div style={{ padding: 10 }}>
                    <QuestionList question='Is he wheezing?' tag='Q2' />
                </div>
                <div style={{ padding: 10 }}>
                    <QuestionList question='Is he unconscious?' tag='Q3' />
                </div>
                {/* <div style={{ padding: 10 }}>
                    <Button></Button>
                </div> */}
            </div>
        )
    }
}

class Advice extends React.Component {
    render() {
        return (
            null
        )
    }
}

const routing = (
    <Router>
        <div className={styles.wrapper}>
            <Route exact path="/" component={App} />
            <Route path="/questions" component={Questions} />
            <Route path="/advice" component={Advice} />
        </div>
    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById("root")
);
