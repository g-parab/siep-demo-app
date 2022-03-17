
 
  // *** snippet starts here ***
  // ***************************
 
  // Example (please overwrite):

	var initESW = function(gslbBaseURL) {
		embedded_svc.settings.displayHelpButton = true; //Or false
		embedded_svc.settings.language = 'de'; //For example, enter 'en' or 'en-US'
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
		"setCustomField",
		function(event) {
			/*event.detail.customFields.forEach(function(field) {
				var setting = embedded_svc.settings.extraPrechatFormDetails.find(obj => {
				  return obj.label === field.label
				});
				if(setting)
					setting.value = field.value;
			});*/
			// Fire startChat callback.
			embedded_svc.settings.extraPrechatFormDetails.push({
			    "label":"Token", "displayToAgent": true, "transcriptFields": ["SP_Authentication_Token__c"], "value": ('eyJhbGciOiJSUzI1NiIsImtpZCI6IkI0NjhEODMyOEY4NjdGNTgyRjNENjBGN0IzOUIwREU0MjYyQzZEOUZSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InRHallNby1HZjFndlBXRDNzNXNONUNZc2JaOCJ9.eyJuYmYiOjE2NDEyOTExMTEsImV4cCI6MTY0MTI5NDcxMSwiaXNzIjoiaHR0cHM6Ly9hdXRoLnNpZXBvcnRhbGludGVncmF0aW9uLnNpZW1lbnMuY29tIiwiYXVkIjpbIkluZHVzdHJ5IE1hbGwiLCJjb2NrcGl0IiwiU2llbWVucyBJbmR1c3RyeSBPbmxpbmUgU3VwcG9ydCIsInJlY2VudGx5dmlld2VkIiwibWFya2V0aW5nIiwicXVpY2tsaW5rcyIsInVzZXJwcmVmZXJlbmNlcyIsIm1haW5uYXZpZ2F0aW9uIiwicmVjb21tZW5kYXRpb24iXSwiY2xpZW50X2lkIjoiU2llbWVucy5TaWVQb3J0YWwuVUkiLCJzdWIiOiIzQ0E0QzAxNkExREFEMzYyNERDMThBMkE0QjNGQkMwMUNDQzhFMzY1ODRBN0Q4NDVFRDVEN0E0OTdDQzg0NDQ2IiwiYXV0aF90aW1lIjoxNjQxMjkxMTEwLCJpZHAiOiJTYW1sMiIsInVybjpvaWQ6c3NvOmNyZWQiOiJTaWVwX0IwX0NoYXRfMDAiLCJ1cm46b2lkOnNzbzpzc291aWQiOiJGNjA2RTBCQy02NjFELTQxOUUtODgwMy1GMDc2NTRCMjVENzkiLCJ1cm46b2lkOnNzbzpmYW1pbHluYW1lIjoiQ2hhdCIsInVybjpvaWQ6c3NvOmdpdmVubmFtZSI6IkJvdCIsInVybjpvaWQ6c3NvOm1haWwiOiJzaWVwb3J0YWwtdGVzdHRlYW0uaXRAc2llbWVucy5jb20iLCJyb2xlIjoidXNlciIsImluaXRpYWxzIjoiQkMiLCJsYXN0LWxvZ2luIjoiMjAyMi0wMS0wNFQxMDoxMTo1MSArMDA6MDAiLCJqdGkiOiI0MzAyMDIyRjlDMTg3OTJGRDlFNDA5NTU1NTkyNThDOSIsInNpZCI6IjZGRTc0RkM5RTMyRjRENURBNUFERTg2QUU1RUVEQjg3IiwiaWF0IjoxNjQxMjkxMTExLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwibGFzdC1sb2dpbiIsImluaXRpYWxzIiwidXJuOm9pZDpzc286ZmFtaWx5bmFtZSIsInVybjpvaWQ6c3NvOmdpdmVubmFtZSIsInVzZXJwcmVmZXJlbmNlcyIsInF1aWNrbGlua3MiLCJjb2NrcGl0IiwibWFya2V0aW5nIiwicmVjZW50bHl2aWV3ZWQiLCJtYWlubmF2aWdhdGlvbiIsInJlY29tbWVuZGF0aW9uIiwibWFsbCIsInNpb3MiXSwiYW1yIjpbImV4dGVybmFsIl19.fYcHmmCuPRRcOwLi-zz46Ev0qiYNZvSRh6KHRYjKUMbFKfDubtTaFzYtjLKM6Slj9in8yx7ZTIDTnGwAP1dkJHbKkr-Lv4Bk4Wx4n4FpMyUgYbJk8NpExoGxR8uK4SLvgPSh4Tj9ILTFhsFnV-NbcoWDHgvt8oG3Bpzry8SLBXGkJ8AqjjW5JqJMpZvQaFc8UBIywLf3GKTgS9BfDD2l-toBp7wDJ6T1rP9wvxl-r55v03yyEPM0xtFg-f2BA6rovtiwXgd4X_bm_wDjJFr3L7Bnx12xxn5Uibu-G8AwZeHx6ihQVpOrKoMDEaPWi8hsL-BTG0hCJq5doPsNJV8YZwHwAcSCqdXPttkmgP_j13XS8VYBzA2aIM_zauyWGmEkamCfdqhTqJBzbjvCFio4AQtOU9pT5kG8hPnr8o-H1jRD0M3M7vQECYkoWdmKUQL37oHvyQeNEbDFdTc2ChXv1XeodSEy1PujwbcvHZ_Y-z0dwL8PoOUyNbLMobft5fYwCCvcfY4_ixldV_ia8GrFqXeToNw1hcrJ9flNEncaRW4CL1XNzx1nfRxwdcGDdj5nGFOrTkQt6f1FiP8G9aFbprEEKxDP8mnYak1pZLngC3rpDdcy8z3bGd5_GmfS7lEnLgY4Oe-1D5P-Nv_lnL-5zzZ5MUd1Hpf36hOe7oDZDb4')
			 },
			 {
			    "label":"Country", "displayToAgent": true, "transcriptFields": ["SP_Country__c"], "value": ('<Insert Country Value Here>')
			 },
			 {
			    "label":"Language", "displayToAgent": true, "transcriptFields": ["SP_Language__c"], "value": ('<Insert Language Value Here>')
			 });
			event.detail.callback();
		},
		false
	);

	if (!window.embedded_svc) {
		var s = document.createElement('script');
		s.setAttribute('src', 'https://sieportal--dev.my.salesforce.com/embeddedservice/5.0/esw.min.js');
		s.onload = function() {
			initESW(null);
		};
		document.body.appendChild(s);
	} else {
		initESW('https://service.force.com');
	}

  // / Example (please overwrite)
 
  // *************************
  // *** snippet ends here ***
 

