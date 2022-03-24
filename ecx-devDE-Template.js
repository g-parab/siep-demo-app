
 // *** snippet starts here ***
  // ***************************
 
  // Example (please overwrite):
  var initESW = function (gslbBaseURL) {
    embedded_svc.settings.displayHelpButton = true; //Or false
    embedded_svc.settings.language = 'de'; //For example, enter 'en' or 'en-US'
    //embedded_svc.settings.targetElement =  chatbotScriptsParameters.chatbotParent;
 
    embedded_svc.settings.defaultMinimizedText = 'Chatten Sie mit einem Experten'; //(Defaults to Chat with an Expert)
    //embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)
 
    embedded_svc.settings.loadingText = 'Wird geladen'; //(Defaults to Loading)
    //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)
 
    // Settings for Chat
    //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
    // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
    // Returns a valid button ID.
    //};
    //embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
    //embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
    //embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)
 
    embedded_svc.settings.enabledFeatures = ['LiveAgent'];
    embedded_svc.settings.entryFeature = 'LiveAgent';
 
    embedded_svc.init(
      'https://sieportal--dev.my.salesforce.com',
	  'https://dev-sieportal-dev.cs107.force.com/heim',
      gslbBaseURL,
      '00D1q0000008hJr',
      'SP_Chat_Agents_German',
		{
			baseLiveAgentContentURL: 'https://c.la1-c1cs-cdg.salesforceliveagent.com/content',
			deploymentId: '5721q00000000mx',
			buttonId: '5731q00000002x7',
			baseLiveAgentURL: 'https://d.la1-c1cs-cdg.salesforceliveagent.com/chat',
			eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I1q0000004EP8EAM_17bb9c4cb0b',
			isOfflineSupportEnabled: false
		}
    );
  };
 
  document.addEventListener(
    'setCustomField',
    function (event) {
      // Fire startChat callback.
        embedded_svc.settings.extraPrechatFormDetails.push(
        {
          label: 'Token',
          displayToAgent: false,
          transcriptFields: ['SP_Authentication_Token__c'],
          value: chatbotScriptsParameters.token
        },
        {
          label: 'Country',
          displayToAgent: true,
          transcriptFields: ['SP_Country__c'],
          value: chatbotScriptsParameters.country
        },
        {
          label: 'Language',
          displayToAgent: true,
          transcriptFields: ['SP_Language__c'],
          value: chatbotScriptsParameters.language
        });
        event.detail.callback();
    },
    false
  );
 
  if (!window.embedded_svc) {
    var s = document.createElement('script');
    s.setAttribute('src', 'https://sieportal--dev.my.salesforce.com/embeddedservice/5.0/esw.min.js');
    s.onload = function () {
      initESW(null);
    };
    document.body.appendChild(s);
  } else {
    initESW('https://service.force.com');
  }
  // / Example (please overwrite)
 
  // *************************
  // *** snippet ends here ***
