## What is the problem?
There is a limited amount of manpower in SCDF emergency medical services (EMS). Therefore, it is of utmost importance that EMS only tend to the critical cases instead of the non-emergency ones. People have misused the EMS services for minor and less critical cases and this causes a wastage of SCDF's precious resources. As such, SCDF might possibly overlook people who are in dire need of help. On the other hand, there are also members of the public who avoid dialling 995 for EMS due to over-caution and misguided interpretations of the situation at hand. People may not be equipped with sufficient knowledge to identify the medical emergency, not to mention being able to offer medical help.
How can technology help?
Our solution enables the members of the public to identify the current symptoms shown by the victim swiftly using image classification in the event that the members of the public are unable to gauge the severity of the situation. Our solution enables the members of the public to perform the suitable first aid measures according to the victim’s condition and mitigate the problem before the SCDF arrives to help the patient.
## The idea - EMS Advisor 
EMS Advisor, backed by IBM Cloud and Watson Services, will relieve the burden on SCDF of having to entertain non-emergency cases. We utilised the IBM Cloud Annotations and Watson Machine Learning Services to train an image classification model to decipher the conditions posed by the victim. We trained the model using multiple images of people having medical conditions such as physical injury, cardiac arrest, falls, heat stroke. The model is integrated with our front-end interface, the React webapp, so that the members of the public do not need to download a mobile application to access our solution.
## Architecture
<img src="https://github.com/leonyeo/projectzero-EMSAdvisor_SCDFXIBM/blob/master/src/components/readMe.PNG"/>
1. The user navigates to the site and uploads an image.
2. IBM Cloud Annotations model classifies and identifies image features.
3. The user can answer additional questions for a more accurate diagnosis.
4. The site displays instructions for responding to the situation.
 
## Feasibility of EMS Advisor
EMS Advisor is deployed as a webapp as we believe that people are likely to google search for solutions in times of emergency. Search engine optimization will be used such that EMS Advisor will be the first link to appear in the search and people will have easy access to the link, to use it to access the situation. A webapp is more applicable as well as it is made public and members of the public can use it in times of emergency.
##Challenges and Mitigation
We have considered potential challenges we may face. There are going to be closely related symptoms and this may lead to inaccurate diagnosis of the patient’s condition. In addition, type 1 errors might occur where EMS Advisor recommends no treatments for a person that requires medical help. To tackle this problem, we need to work closely with the medical professionals, such as doctors and nurses, to improve on the diagnostic algorithm and minimise diagnostic errors. The database will be populated with more images of people having different symptoms to increase the accuracy of the image detection. 

## Vision
We want to reform and revolutionise the user’s journey when they are having an emergency situation. This is to be done so in a manner that is efficient, effective and does not require much human intervention. This way, SCDF can focus their human resource on more pressing issues. L


