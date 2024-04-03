import React from "react";
import classes from "./TermOfUse.module.css";
import Footer from "../../../Components/Footer/Footer";
import TOUHeading from "./TermOfUseComponents/TOUHeading";
import TOUText from "./TermOfUseComponents/TOUText";

const TermOfUse = () => {
  return (
    <div>
      {/* <div className={classes.heading}>
        <h1>Terms of Use</h1>
      </div> */}
      <div className={classes.subContainer}>
        <TOUHeading heading="1. Introduction" />

        <TOUText text="Welcome to www.innovartan.com (“Website”) and innovartan applications (“Application”), a platform that empowers teachers/educators/tutors & creators to become entrepreneurs by providing them with the most effective tools and services combining live classes, student engagement & admin tools. (Website and Mobile App are going to be collectively referred to as “Platform” further on) owned and managed by Innovartan (“Company”)." />

        <TOUText text="By using any version of or accessing this website you are letting us know that you understand and agree to be bound by these Terms of Service along with the Privacy Policy (“Policy”) and other terms and conditions of this platform. In any case, the User doesn’t trust or agree with the terms and conditions of the Policy, it is requested of the User to refrain from using this Website." />

        <TOUText text="As used herein, “Users” shall mean anyone who uses or accesses the Website/ Services on any computer, mobile phone, tablet, console or other devices (collectively, “Device”). The users include such persons who are creating User Content (as defined below) and publishers who publish the education/ study material on the Website. Your continued use of the Website shall be constituted as your acceptance to the T&C, as revised from time to time. If you do not agree with these T&C, please do not access the Website and use the Services. For the purposes of these T&C, “we”, “our” and “us” shall mean innovartan, and/or third-party service providers engaged by innovartan to render Services on the Website and “you” and “your” shall mean a User who meets the eligibility criteria set out below." />

        <br />

        <TOUHeading heading="2. System Requirements" />

        <TOUText text="Use of the Services requires one or more compatible devices, Internet access (fees may apply), and certain software (fees may apply), and may require obtaining updates or upgrades from time to time. Because use of the Services involves hardware, software, and Internet access, your ability to access and use the Services may be affected by the performance of these factors. High-speed Internet access is recommended. You acknowledge and agree that such system requirements, which may be changed from time to time, are your responsibility" />

        <br />

        <TOUHeading heading="3. Terms and Conditions subject to change" />

        <TOUText text="3.1 We reserve the right to update or modify these T&C at any time without prior notice. Your access to the Website and use of the Services following any such change constitutes your agreement to follow and be bound by these T&C, as updated or modified. For this reason, we encourage you to review these T&C each time you access and use the Services." />

        <br />

        <TOUHeading heading="4. Criteria" />

        <TOUText text="(4.1) You represent and warrant that you are competent and eligible to enter into a legally binding agreement and be bound by these T&C. You shall not access and use the Services if you are not competent to contract under the applicable laws, rules and regulations" />

        <TOUText text="(4.2) If you are accessing the Website and the Services are being used for the benefit of a minor, you expressly confirm that you are legally competent to provide consent on behalf of such a minor and that the minor’s use of the Website and/or the Services shall be subject to the T&C." />

        <TOUText text="(4.3) If you represent a company, partnership firm or sole proprietorship, you shall be eligible to access the Services and avail of the features and facilities on its behalf only if you have been duly authorized by way of necessary corporate action, as may be prescribed statutorily and/or under the charter documents of such entity and further if you have fulfilled such additional eligibility requirements as innovartan may require in connection therewith." />

        <br />

        <TOUHeading heading="5. Intellectual Property Rights" />

        <TOUText text="(5.1) All of the content on the Services, including, without limitation, all of the page headers, images, illustrations, graphics, audio clips, video clips or text, interface, reports generated, trademarks, tradenames, trade secrets (“Services Content”), constitute our and our partners’ intellectual property. Copyright laws in all applicable jurisdictions protect the Services and the Services Content" />

        <TOUText text="(5.2) You may access the Services, avail of the features and facilities and utilize the Services Content for your personal or internal requirements only. You agree not to duplicate, distribute, create derivative works of, display, or commercially exploit the Services Content, features or facilities, directly or indirectly, except as expressly authorized herein. In case you want to request permission to commercially exploit any Services Content, you could contact us" />

        <TOUText text="(5.3) Innovartan is the sole owner of the underlying software and source code associated with the Services and all the trademarks, copyright and any other intellectual property rights of any nature in the Services." />

        <br />

        <TOUHeading heading="6. Accounts" />

        <TOUText text="(6.1) You are required to create an account (“Account”) on the Website to have access to the Services. You are responsible for maintaining the confidentiality of your login credentials and your Account and are fully responsible for all activities that occur under your password or Account. You agree to:" />

        <TOUText text="a) Immediately notify us of any unauthorized use of your password or Account or any other breach of security, and" />
        <TOUText text="b) Ensure that you exit from your Account at the end of each session. We cannot and will not be liable for any loss or damage arising from your failure to comply with this section." />

        <TOUText text="(6.2) You hereby acknowledge that the deletion of the Services from the Device does not constitute termination of your Account and agree to undertake the process detailed herein in order to complete de-registration. If you are desirous of having your name and other details removed from the innovartan records, immediately upon receiving your written request to that effect innovartan shall remove and/delete all such information." />

        <br />

        <TOUHeading heading="7. Communications" />

        <TOUText text="(7.1) Accepting these T&C, implies your express consent to be contacted by us, our agents, representatives, affiliates, or anyone calling on our behalf at any contact number, or physical or electronic address provided by you while registering your Account. You further agree to us contacting you in any manner, including without limitation, SMS messages (including text messages), calls using pre-recorded messages or artificial voice, calls and messages delivered using an auto telephone dialling system or an automatic texting system, and notifications sent via the Services. Automated messages may be played when the telephone is answered whether by you or someone else. If an agent or representative calls, he or she may also leave a message on your answering machine, voice mail, or send one via SMS" />

        <TOUText text="(7.2) You certify, warrant and represent that the telephone numbers and/or email addresses and any other information that you have provided (at the time of registering on the Website or thereafter or for creating an Account) to us are your own and not someone else’s and are true, accurate, current and complete. You represent that you are permitted to receive calls at each of the telephone/ mobile numbers you have provided to us and emails at each of the email addresses you have provided us. You agree to notify us whenever you stop using a telephone/ mobile number(s) and/or email address(es)." />

        <br />

        <TOUHeading heading="8. User Guidelines" />

        <TOUText text="(8.1) In consideration of innovartan granting you the rights hereunder, you hereby agree not to use the Services for any purpose that is unlawful under any applicable laws and/or in violation of the terms of these T&C and our Privacy Policy. You shall not use the Services in any manner that could damage, disable, overburden, or impair our server, or any network(s) connected to any other server, or interfere with any other party’s use and enjoyment of the Services. You shall not attempt to gain unauthorized access to any functions and features, other user accounts, computer systems or networks connected to any other server, in any manner, including, through hacking, password mining or any other means. You shall not obtain or attempt to obtain any materials or information through any means which is not intentionally made available to your Account or through the Services." />

        <TOUText text="(8.2) The Services are made available to you on non-exclusive, non-transferable, non-sublicensable and on limited license basis for your own personal and non-commercial use alone and grants you a limited right to temporarily download one copy of the material (information or software) on the Website. You shall not allow third parties to:" />

        <TOUText text="a) Make And/Or Distribute Copies Of The Services Or Any Deliverable Generated By The Services" />
        <TOUText text="b) Attempt To Copy, Reproduce, Alter, Modify And/Or Reverse Engineer" />
        <TOUText text="c) Create Derivative Works Of The Services" />

        <br />
        <br />

        <TOUText text="(8.3) You accept that any and all operations emanating from your Device shall be assumed to have been initiated by you." />
        <TOUText text="(8.4) You shall not copy, reproduce, distribute, or create derivative works or modify the Services Content that is available on the Website. Also, you shall not attempt to decompile or reverse engineer or reverse compile our technology/ software that is available on the Website or transfer the material to another person or “mirror” the material on any other server, including, without limitation, such Java applet, as may be associated with the Website and/ or the Services from time to time." />
        <TOUText text="(8.5) You shall request innovartan to block the Account and change the password immediately for the Account, if your Device has been lost or stolen." />
        <TOUText text="(8.6) You shall be liable for losses incurred by innovartan or any other party due to a third party’s use of the Account. You shall not use any other person’s account at any time, without the permission of the account holder and innovartan." />
        <TOUText text="(8.7) Innovartan shall make all reasonable efforts to ensure that your information is kept confidential. However, innovartan shall not be responsible for any disclosure or leakage of confidential information and/or loss or damage of the Device due to theft, negligence or failure on your part to practice safe computing." />
        <TOUText text="(8.8) You shall ensure that while using the functions and features, all prevailing and applicable laws, rules and regulations, shall at all times, be strictly complied with by you and innovartan shall not be liable in any manner whatsoever for default of any nature, by you, regarding the same." />
        <TOUText text="(8.9) You understand and acknowledge that upon using the Services, you authorize us to access third party sites designated by you, on your behalf, to retrieve such information requested by you, and to register for accounts requested by you. For all purposes hereof, you hereby grant us a limited powers and hereby authorize us with the full power of substitution and re-substitution, for you and in your name, place and stead, in any and all capacities, to access third party internet sites, servers or documents, retrieve information, and use your information, all as described above, with the full power and authority to do and perform each and every act and thing requisite and necessary to be done in connection with services and facilities available on the Services, as fully to all intents and purposes as you might or could do in person. YOU ACKNOWLEDGE AND AGREE THAT WHEN WE ACCESSES AND RETRIEVE INFORMATION FROM THIRD PARTY SITES, WE ARE ACTING AS YOUR AGENT, AND NOT THE AGENT OR ON BEHALF OF THE THIRD PARTY. You agree that such third parties shall be entitled to rely on the foregoing authorization, agency granted by you." />
        <TOUText text="(8.10) You must notify your bank immediately in the event your credit/ debit card is lost, stolen, not received, swallowed at an ATM, or is being misused without your permission. Please refer the detailed instructions received from your bank for additional precautions to be taken in case of loss/ theft/ misuse of your credit/ debit card." />

        <br />

        <TOUHeading heading="9. Materials accuracy" />

        <TOUText text="The material as part of the Services and as appearing on the Website could include technical, typographical, or photographic errors. innovartan does not warrant that any of the material on the Website is accurate, complete or current. While, innovartan may make changes to the material made available as the Services or on the Website at any time without notice, however it is under no obligation to update the material." />

        <br />

        <TOUHeading heading="10. User generated contenty" />

        <TOUText text="(10.1) innovartan provides that its Users have an option of creating tutorial videos, audio, clips, uploading, displaying, sharing, publishing the content on the Website (“User Content”). Upon publishing or uploading of any User Content on the Website, you represent and warrant to innovartan that: You are the owner or the license holder of all copyright in the User Content, The User Content shall not infringe the intellectual property rights or other rights of any person or entity, including but not limited to copyright, moral rights, trademark, patent or rights of privacy or publicity, The User Content does not include any harmful or hateful content, The User Content does not disparage, insult or malign any person, people, races, religion or religious group and does not have any obscene, pornographic, abusive, inflammatory or otherwise sexually oriented or objectionable contents, The User Content is not contrary to any applicable laws." />
        <TOUText text="(10.2) You agree and acknowledge that innovartan has no role or control over and assumes no responsibility whatsoever for, the User Content and by posting such User Content on the Website, you expressly undertake to be personally liable for any and all liability arising therefrom. You also agree and acknowledge that innovartan has a right to review the User Content but not an obligation to assess if the same is contrary to these T&C and/or any applicable laws. Further, innovartan may remove any content from the Website and/or block, disable, terminate or suspend the User account in its sole discretion (including in the event a notice is received by innovartan that such User Content is breaching any intellectual property right of any third party)" />
        <TOUText text="(10.3) innovartan hereby agree and confirms as follows: Subject to the provisions of the Privacy Policy, any data received from the Users/ student shall not be shared with any third-party for monetization purposes (including to such persons who are engaged in the business of lead generations) without prior intimation to the relevant User. The details shared by the Users will be stored in encrypted format. All User Content remains the property of such User and constitutes the intellectual property of the such User alone. innovartan shall not, in any manner and without the consent of such User share or authorise the replication of such content by any other User provided that in the event that any content that is already available in the public domain and/ or the Website, and by virtue of such availability in public domain, such content may be generated in same or substantially similar form by multiple Users, innovartan shall not be under an obligation to remove such same or substantially similar content of any other User." />

        <br />

        <TOUHeading heading="11. Third Party Links etc" />

        <TOUText text="(11.1) All the websites linked to the Website are not verified by innovartan and inclusion of any link does not imply endorsement by innovartan and usage/ access of/ to any such linked website is at the user’s own risk." />
        <TOUText text="(11.2)The Website may from time to time run promotions and advertisements of third parties, products and/or services. Your relationships and business dealings with any such third parties shall be solely matters between you and such third parties." />
        <TOUText text="(11.3)You acknowledge and agree that innovartan is not responsible or liable for any loss or damage of any kind incurred as a result of any such dealings with such third parties." />

        <br />

        <TOUHeading heading="12. Force Majeure" />

        <TOUText text=" innovartan shall not be liable for failing to perform, or delay in performance of, any of its obligations if, and to the extent that, such failure or delay is caused by an event substantially beyond its control, including but not limited to acts of God, acts of the public enemy or governmental authority in its sovereign or contractual capacity (including but not limited to declaration of lockdown), war, terrorism, floods, fire, strikes, epidemics, pandemics, civil unrest or riots, and/or power outage or grid failure." />

        <br />

        <TOUHeading heading="13. Payments and Refund Policye" />

        <TOUText text="The subscription term will end on the expiration date and you cannot cancel it before its expiration. innovartan will not provide refunds if you decide to stop using the Website during your subscription term." />

        <br />

        <TOUHeading heading="14. Indemnification" />

        <TOUText text="(14.1)You agree to protect, defend and indemnify us and hold us and our officers, directors, partners, employees, agents, investors and representatives harmless from and against any and all claims, damages, costs and expenses, including attorneys’ fees, arising from or related to your access and use of the Website and/ or the Services in violation of these T&C and/or your infringement, or infringement by any other user of your Account, of any intellectual property or other right of anyone." />
        <TOUText text="(14.2) The terms of this provision will survive any termination or cancellation of these T&C or your use of the Services." />

        <br />

        <TOUHeading heading="15. Warranties" />

        <TOUText text="(15.1) The Services and the functions and feature of the Website are provided on an “as is” and on an “as available” basis. We expressly disclaim all warranties of any kind, whether express or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose and non-infringement." />
        <TOUText text="(15.2) innovartan shall make reasonable efforts to provide the Services and the functions and features. However, we make no warranty that the Services shall meet your requirements, be uninterrupted, timely, secure, and/or error free. Further we do not make any warranty as to the results that may be obtained from the use of the functions and features or as to the accuracy, reliability and/or quality of the output derived therefrom." />
        <TOUText text="(15.3) innovartan shall not be liable for the loss and/or damage of the confidential information or data of the User arising as a result of an event or a series of related events, that is beyond its control including failures of or problems with the internet or part of the internet, attempted hacker attacks, hacker attacks, denial of service attacks and/or viruses or other malicious software attacks or infections." />
        <TOUText text="(15.4) Any material downloaded or otherwise obtained through the Services is done at your own discretion and risk and you are solely responsible for any damage to your Device or loss of data that results from the download of any such material. No advice or information, whether oral or written, obtained by you from us through or from the Service will create any warranty not expressly stated in these T&C" />

        <br />

        <TOUHeading heading="16. Limitation of Liability" />

        <TOUText text="In no event shall we be liable for any direct, indirect, punitive, incidental, special or consequential damages or for any damages whatsoever including, without limitation, damages for loss of use, data or profits, arising out of or in any way connected with the access, use or performance of the services, functions and features or for interruptions, delay, etc., even if we were advised of the possibility of damages resulting from the cost of getting substitute facilities on the services, any servicess, data, information or services purchased or obtained or messages received or transactions entered into through or from the services, unauthorized access to or alteration of your transmissions or data statements or conduct of anyone on the services, or inability to use the services, the provision of or failure to provide the functions and features, hether based on contract, tort, negligence, strict liability or otherwise. this clause shall survive in perpetuity" />

        <br />

        <TOUHeading heading="17. Confidentiality" />

        <TOUText text="(17.1) You will not disclose any information provided to you including the User list, customers list, name and addresses, ideas, business model, processes, concepts etc. relating to innovartan or the Website to any third party (“Confidential Information”) that has been disclosed to you or come into your knowledge during the subscription term." />
        <TOUText text="(17.2) You acknowledge and agree that the Confidential Information so provided to you shall at all times be the property of innovartan and any breach of the same shall cause irreparable damage to innovartan." />

        <br />

        <TOUHeading heading="18. Severability" />

        <TOUText text="(18.1) If any provision of these T&C is held to be illegal, invalid or unenforceable under any present or future applicable laws: (a) such provision will be replaced with another, which is not prohibited or unenforceable and has, as far as possible, the same legal and commercial effect as that which it replaces; and (b) the remaining provisions of the T&C will remain in full force and effect and will not be affected by the illegal, invalid, or unenforceable provision or by its severance here from." />

        <br />

        <TOUHeading heading="19. Termination" />

        <TOUText text="(19.1) innovartan may bock, restrict, disable, suspend or terminate the use of the Services at any time without giving any notice to you in case you are inter alia found to (i) be in breach of the terms of these T&C (including the Privacy Policy); (ii) violate any applicable laws; (iii) be infringing the intellectual property rights of any third party; (iv) be acting in a manner which may result into any claim against innovartan." />
        <TOUText text="(19.2) Upon termination, the rights and license granted to you herein shall terminate and you must cease all use of and access to the Services and/ or Website and you must destroy any downloaded materials in your possession whether in electronic or printed format." />
        <TOUText text="(19.3) Any termination of your right to use or access the Website and/ or the Services shall not affect liability incurred by you prior to such termination." />

        <br />

        <TOUHeading heading="20. Waiver" />

        <TOUText text="Any failure on the part of innovartan to require performance of any provision of these T&C shall not affect its right to full performance thereof at any time thereafter, and any waiver by innovartan of a breach of any provision hereof shall not constitute a waiver of a similar breach in the future or of any other breach." />

        <br />

        <TOUHeading heading="21. Assignment" />

        <TOUText text="You shall not assign or transfer any rights, obligations, or privileges that you have under these T&C, without the prior written consent of innovartan. Subject to the foregoing, these T&C will be binding on your legal heirs, successors and permitted assignees. Any assignment or transfer in violation of this clause will be deemed null and void. innovartan’s rights under the T&C are freely transferable by innovartan to any third parties without the requirement of intimating you or seeking your consent." />

        <br />

        <TOUHeading heading="22. Updatest" />

        <TOUText text="(22.1) innovartan reserves the right to update the Website and/ or the Services, in order to, inter alia, increase efficiency, optimize user interface, and add new facilities from time to time. Update packages will be sent to you on your Device for download and installation." />
        <TOUText text="(22.2) You hereby agree to install the updates from time to time and acknowledge that innovartan will only be able to provide Account support for the Services if you ensure to install all updates upon receiving notifications thereof when using the Services." />

        <br />

        <TOUHeading heading="23. Governing Law and Jurisdiction" />

        <TOUText text=" These T&C (and by extension, the Privacy Policy) are governed and construed in accordance with laws of India. By using the Services, you hereby irrevocably consent to the exclusive jurisdiction and venue of courts in New Delhi, India, in the event of any disputes arising out of or in relation to your access to and use of the Services." />

        <br />

        <TOUHeading heading="24. Validity of T&C" />

        <TOUText text="These T&C shall apply when you complete the authentication process and create an Account and shall remain valid and binding on you for so long as you maintain the Account. " />

        <br />

        <TOUHeading heading="25. Contact Us" />

        <TOUText text="You may please contact us at info@innovartan.com or +91 120 326 5325" />
        
      </div>
      <Footer />
    </div>
  );
};

export default TermOfUse;
