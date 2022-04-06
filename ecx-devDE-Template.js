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
      'https://sieportal--stage.my.salesforce.com',
	  'https://stage-sieportal.cs102.force.com/start',
      gslbBaseURL,
      '00D1j0000008eIR',
      'SP_Chat_Agents_German',
		{
			baseLiveAgentContentURL: 'https://c.la1-c1cs-fra.salesforceliveagent.com/content',
			deploymentId: '5721j0000008QRi',
			buttonId: '5731j0000008SHw',
			baseLiveAgentURL: 'https://d.la1-c1cs-fra.salesforceliveagent.com/chat',
			eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I1j00000001JFEAY_17e496d098b',
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
          value: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkI0NjhEODMyOEY4NjdGNTgyRjNENjBGN0IzOUIwREU0MjYyQzZEOUZSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InRHallNby1HZjFndlBXRDNzNXNONUNZc2JaOCJ9.eyJuYmYiOjE2NDkxNjU4NTYsImV4cCI6MTY0OTE2OTQ1NiwiaXNzIjoiaHR0cHM6Ly9hdXRoLnNpZXBvcnRhbGludGVncmF0aW9uLnNpZW1lbnMuY29tIiwiYXVkIjpbIkluZHVzdHJ5IE1hbGwiLCJjb2NrcGl0IiwiU2llbWVucyBJbmR1c3RyeSBPbmxpbmUgU3VwcG9ydCIsInJlY2VudGx5dmlld2VkIiwibWFya2V0aW5nIiwicXVpY2tsaW5rcyIsInVzZXJwcmVmZXJlbmNlcyIsIm1haW5uYXZpZ2F0aW9uIiwicmVjb21tZW5kYXRpb24iXSwiY2xpZW50X2lkIjoiU2llbWVucy5TaWVQb3J0YWwuVUkiLCJzdWIiOiJGM0ZFMzg3NTE5RjYzRjE1MEJERUNCOUFBRUVCODRDRUM1QkE1RTU2M0Q5NjVDRUVGRTM4NkQxQ0MyQjkyNzU0IiwiYXV0aF90aW1lIjoxNjQ5MTY1ODIwLCJpZHAiOiJTYW1sMiIsInVybjpvaWQ6c3NvOm1haWwiOiJzaWVwb3J0YWwtdGVzdHRlYW0uaXRAc2llbWVucy5jb20iLCJ1cm46b2lkOnNzbzpzaW9zcHQiOiJ0cnVlIiwidXJuOm9pZDpzc286Z2l2ZW5uYW1lIjoiQ2hhdCIsInVybjpvaWQ6c3NvOmZhbWlseW5hbWUiOiJCb3QwMiIsInVybjpvaWQ6c3NvOmNyZWQiOiJTaWVwX0IwX0NoYXRfMDIiLCJ1cm46b2lkOnNzbzpzc291aWQiOiIxOTVBOUYwOC04MTBFLTQ1MjYtOTJDNS0zQzg4NTBFNzUwRTEiLCJyb2xlIjoidXNlciIsImluaXRpYWxzIjoiQ0IiLCJsYXN0LWxvZ2luIjoiMjAyMi0wNC0wNVQxMzozNzozNiArMDA6MDAiLCJqdGkiOiI2NzcxN0E1RUQ0MjNFQzEwQzMxMUU0RTRCMDgwRTY0MyIsInNpZCI6IjYxNjBBNUVDODg0RTNDMDZDQzRCNEE0MEI1MzdBNEFCIiwiaWF0IjoxNjQ5MTY1ODU2LCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwibGFzdC1sb2dpbiIsImluaXRpYWxzIiwidXJuOm9pZDpzc286ZmFtaWx5bmFtZSIsInVybjpvaWQ6c3NvOmdpdmVubmFtZSIsInVzZXJwcmVmZXJlbmNlcyIsInF1aWNrbGlua3MiLCJjb2NrcGl0IiwibWFya2V0aW5nIiwicmVjZW50bHl2aWV3ZWQiLCJtYWlubmF2aWdhdGlvbiIsInJlY29tbWVuZGF0aW9uIiwibWFsbCIsInNpb3MiXSwiYW1yIjpbImV4dGVybmFsIl19.S75kVJjfK7TgBQPksK-6DhZWW6nvVBc_e-S9xhNNGhXJ6xbWGVFLYp0GIoXEUNQu1aOd8n6Zi8kLRGvBZkrbVDwiQXdveu9BVVhOWo8_9MAVEoDpfH-6HBB8WILw1SDi88w92WgxQ6TIxGV59Kvgkhj4HluDMmmzvZXk7dBxAy6kAcJuvtzcwAICnCQy0TNgtH8vtCDW7jpv3-RhOsfKeYXbnTqh1SHKiIitN0ts6InUicoBUBKt9Dp2pv4u3P5AUG1qmxlqak_4x7HWAK8yyu0Kn0DT4ngxrDj3vzYIvuyDLcWcVIU6GXzeMuq9g1IKEmF3zDY0FASzSTmIIHzHQMfsRaQLSDATcLSYjjzANZR80Y_MdGjhTcgTYndVVGo7cw_d0DfdRrBxLDYDKBrbMptOacCJyWJb3vbaxLHHcKRtgcacGKpJNC6rpKAof0RlLMONVsUhuHu6ZxZDvo70W30kagW0m80qZz2W2TTgQZBoIl3EUk5oG3apCGYtnUvpLFJRAHI56IJd4lhx5pxpimXLIQ_RXTfp_Y_kFBxWihkzuXARyfCD3-_vw8n2O3TlmlBcvfB-NBGWT6Fmw5pWVscEit47ePTgVKKZKMBU1L5qjF3tg2_e0jWUR20U88GMk5f4jdrH5es-eYt_6ozW6aMy7Jekgc4ah2L8ZO-aAvQ'//chatbotScriptsParameters.token
        },
        {
          label: 'Country',
          displayToAgent: true,
          transcriptFields: ['SP_Country__c'],
          value: 'DE'//chatbotScriptsParameters.country
        },
        {
          label: 'Language',
          displayToAgent: true,
          transcriptFields: ['SP_Language__c'],
          value: 'de'//chatbotScriptsParameters.language
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
