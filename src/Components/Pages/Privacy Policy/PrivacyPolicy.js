import React from "react";
import classes from "./PrivacyPolicy.module.css";
import PrivacyPolicyHeading from "./PrivacyPolicyComponents/PrivacyPolicyHeading";
import PrivacyPolicyText from "./PrivacyPolicyComponents/PrivacyPolicyText";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className={classes.heading}>
        <h1>Privacy Policy</h1>
      </div>
      <div className={classes.subContainer}>
        <div className={classes.subHeading}>
          <PrivacyPolicyHeading heading="1. Privacy Policy" />

          <PrivacyPolicyText text="Welcome to www.innovartan.com (“Website”) and innovartan applications (“Application”), a platform that empowers teachers/educators/tutors & creators to become entrepreneurs by providing them with the most effective tools and services combining live classes, student engagement & admin tools. (Website and Mobile App are going to be collectively referred to as “Platform” further on) owned and managed by Innovartan (“Company”)." />
          <PrivacyPolicyText text="Whoever is using this website (“User”) agrees to be bound by the terms and conditions of this privacy policy (“Policy”). In any case, the User doesn’t trust or agree with the terms and conditions of the Policy, it is requested of the User to refrain from using this Website." />
          <PrivacyPolicyText text="This privacy policy is a legally binding document between the User and Innovartan. When the user clicks on the “I accept the Privacy Policy” tab or uses the Website, the user directly or indirectly in electronic form accepts the terms of the policy which will be effective upon the user and will dictate the relationship between the User and Innovartan." />
          <PrivacyPolicyText text="Please notice that the terms “we”, “our” and “us” refer to innovartan and “you”, “your” and/or “Users” refers to the user of the Platform in this document. Our Platform is for teachers, educators, tutors, creators and students." />
          <PrivacyPolicyText text="This policy acts as an electronic record or contract published in a manner conforming with the Information Technology Act, 2000, the principles made thereafter and also the amended provisions concerning electronic documents/records in various statutes as amended by the IT Act, from time to time. This digital document is also in accordance with the provisions of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data of Information) Rules, 2011 (“Data Protection Rules”) under the Information Technology Act, 2000; which calls for the publishing of the Privacy Policy for the gathering, use, storage and transfer of information. Please note that this Policy doesn’t need any physical, electronic or digital signature." />
          <PrivacyPolicyText text="As for the data that’s collected from you falls under the categories or are categorized as – “Personal Information”, “Sensitive Personal Information” and “Associated Information” (each has been individually defined under the Data Protection Rules). Hereafter, all of them shall collectively be mentioned as “Information” or “Personal Information” or “Personal Data” in this Policy." />
          <PrivacyPolicyText text="This Policy shall, at any given time be read and interpreted in line with the terms of use and access of the Website (“T&C”)." />
          <PrivacyPolicyText text="In case some other person uses your or any device to access the website, innovartan won’t be able to identify that unless the login credentials match yours. Once logged in, the user will be recognized as the same person in the credentials. If you wish to make the best use of the Website and make it possible for your Information to be recorded precisely on the Website, you need to log in using your credentials." />
          <PrivacyPolicyText text="Please read this Privacy Policy with full attention and care. By using the Platform, you indicate, agree and acknowledge that you understand, agree and consent to this Privacy Policy and the gathering and use of information in accordance with this Privacy Policy." />
          <PrivacyPolicyText text="Like every other policy, our Privacy Policy is subject to vary and we will post updates on our Website and/or Application regarding the same. It is encouraged that you regularly review this Privacy Policy to stay up-to-date and exercise your right to manage your Personal Information." />
          <PrivacyPolicyText text="Our Terms and Conditions (“Terms”) dictate all use of our Service and combined with the Privacy Policy represents your agreement with us (“Agreement”)." />

          <br />

          <PrivacyPolicyHeading heading="2. Information We Collect" />
          <PrivacyPolicyText text="For however long you’re on the Website/accessing the Website (“Information”), innovartan as per the voluntary registration process may collect the subsequent personal and non-personal information and such other information from the Users, any online survey or interaction on the Website or combination thereof, could also be required from time to time. The Information shall be collected to conduct operations on the Website. The Website collects or can request the below-mentioned Information from the Users." />
          <PrivacyPolicyText text="1.1 Personal Information:" />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
