  // *** snippet starts here ***
  // ***************************
 
  // Example (please overwrite):
  var initESW = function (gslbBaseURL) {
    embedded_svc.settings.displayHelpButton = true; //Or false
    embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'
    //embedded_svc.settings.targetElement =  chatbotScriptsParameters.chatbotParent;
 
    //embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)
    //embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)
 
    //embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
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
      'https://sieportal--stage.my.salesforce.com',
	  'https://stage-sieportal.cs102.force.com/start',
      gslbBaseURL,
      '00D1j0000008eIR',
      'SP_Chat_Agents_English',
      {
        baseLiveAgentContentURL: 'https://c.la1-c1cs-fra.salesforceliveagent.com/content',
		deploymentId: '5721j0000008QRh',
		buttonId: '5731j0000008SHr',
		baseLiveAgentURL: 'https://d.la1-c1cs-fra.salesforceliveagent.com/chat',
		eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I1j00000001JEEAY_17e4974b77c',
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
          value: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkI0NjhEODMyOEY4NjdGNTgyRjNENjBGN0IzOUIwREU0MjYyQzZEOUZSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InRHallNby1HZjFndlBXRDNzNXNONUNZc2JaOCJ9.eyJuYmYiOjE2NDkxNTg5OTcsImV4cCI6MTY0OTE2MjU5NywiaXNzIjoiaHR0cHM6Ly9hdXRoLnNpZXBvcnRhbGRldi5zaWVtZW5zLmNvbSIsImF1ZCI6WyJJbmR1c3RyeSBNYWxsIiwiY29ja3BpdCIsIlNpZW1lbnMgSW5kdXN0cnkgT25saW5lIFN1cHBvcnQiLCJyZWNlbnRseXZpZXdlZCIsIm1hcmtldGluZyIsInF1aWNrbGlua3MiLCJ1c2VycHJlZmVyZW5jZXMiLCJtYWlubmF2aWdhdGlvbiIsInJlY29tbWVuZGF0aW9uIl0sImNsaWVudF9pZCI6IlNpZW1lbnMuU2llUG9ydGFsLlVJIiwic3ViIjoiQjU5NUY4RTJGQkRDOEMzRjYzRkQzOTY4NzdCMDNFRDVERDc3ODQzOENDMDIzMjRGNDFENkRCNDlEMDAyRDQwQSIsImF1dGhfdGltZSI6MTY0OTE1ODk5NCwiaWRwIjoiU2FtbDIiLCJ1cm46b2lkOnNzbzpmYW1pbHluYW1lIjoiQm90MDIiLCJ1cm46b2lkOnNzbzpjcmVkIjoiU2llcF9CMF9DaGF0XzAyIiwidXJuOm9pZDpzc286c3NvdWlkIjoiMTk1QTlGMDgtODEwRS00NTI2LTkyQzUtM0M4ODUwRTc1MEUxIiwidXJuOm9pZDpzc286bWFpbCI6InNpZXBvcnRhbC10ZXN0dGVhbS5pdEBzaWVtZW5zLmNvbSIsInVybjpvaWQ6c3NvOnNpb3NwdCI6InRydWUiLCJ1cm46b2lkOnNzbzpnaXZlbm5hbWUiOiJDaGF0Iiwicm9sZSI6InVzZXIiLCJpbml0aWFscyI6IkNCIiwibGFzdC1sb2dpbiI6IjIwMjItMDQtMDVUMTE6NDM6MTcgKzAwOjAwIiwianRpIjoiOTVBMTU5MEEyQUM2MjQ5MTQyQTBBMDVEN0ZGNTU4QjYiLCJzaWQiOiI1NjkwQjhCRkUxNEY2OEIwRDhDMjBGOTk1RUMxNUI5MiIsImlhdCI6MTY0OTE1ODk5Nywic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImxhc3QtbG9naW4iLCJpbml0aWFscyIsInVybjpvaWQ6c3NvOmZhbWlseW5hbWUiLCJ1cm46b2lkOnNzbzpnaXZlbm5hbWUiLCJ1c2VycHJlZmVyZW5jZXMiLCJxdWlja2xpbmtzIiwiY29ja3BpdCIsIm1hcmtldGluZyIsInJlY2VudGx5dmlld2VkIiwibWFpbm5hdmlnYXRpb24iLCJyZWNvbW1lbmRhdGlvbiIsIm1hbGwiLCJzaW9zIl0sImFtciI6WyJleHRlcm5hbCJdfQ.j74PV8PqRXXtgamPCvWxu02JFQY_t-Xkm2yQU-iZ-cOG4kUxYqmAdIVwQ2SQti4wN3aJ2q1_ruHnMmyf_xgoOYeFiM2icnEj0BUZjzOAW4LxYnDacnKyum75bderoyFUCDUU54MELUGhESVjUZ_2F9KM0atT9EZmuquE1C9Ps64EZXAmNReKVADF1UGKHEd8EPQ4vzhUSwNilIGWqJWXfLQ0wKYQ0Pkc7wGnM1rl_3MRkAMO5uTU6WdcQCTgx1-axa_bG9KPZHPn2B2IQCaGfc2pXakehIAqQVMKnV9RkfkD50LoALhCYw65qAKb-qL6ip-5iywAI8noZ5TZFYdle-eaZVDauOpLpGy_6-C3yYehp3ORmRbqa4sWNj9kD13Chnz_c6D3yhTFdR_dYIjzKG-B6nQmEq-GoLED8YUzvN6Hp4TvTGVNhVMkM0_djLgWGbeD6slCt7h3g7C1Z3xfAymqYvhK4QUhHiCOk1TxUPvLT92bvdEhj1EsLpjKPNPZnnDEUs33zhvmewftGhZcb4HV0LsFB3jLBVzVktIw2uWugd33f0cyyAHIY2fw0Jffl--Zb2AB1urknLun9ONs6ewDL3SH1FRIXrdo5ZsBjcrGaJvgTcXG_ZWy20Eid0EJJbk0FGWfWcllAjIv73qgQyaEWHBOzSuqS9SITH-FMb0'//chatbotScriptsParameters.token
        },
        {
          label: 'Country',
          displayToAgent: true,
          transcriptFields: ['SP_Country__c'],
          value: 'GB'//chatbotScriptsParameters.country
        },
        {
          label: 'Language',
          displayToAgent: true,
          transcriptFields: ['SP_Language__c'],
          value: 'en'//chatbotScriptsParameters.language
        });
        event.detail.callback();
    },
    false
  );
 
  if (!window.embedded_svc) {
    var s = document.createElement('script');
    s.setAttribute('src', 'https://sieportal--stage.my.salesforce.com/embeddedservice/5.0/esw.min.js');
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
