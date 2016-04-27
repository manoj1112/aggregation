sap.ui.jsview("agrrerationbinding.Stuners", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf agrrerationbinding.Stuners
	*/ 
	getControllerName : function() {
		return "agrrerationbinding.Stuners";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf agrrerationbinding.Stuners
	*/ 
	createContent : function(oController) {
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData({
			
		"dataCombo":[
		             {
			"country":"",
			"capital":""
		             },
		             {
		    "country":"India",
		    "capital":"New Delhi"       	 
		             },
		             {
		    "country":"USA",
		    "capital":"Washington D.C."       	 
		             },
		             {
		    "country":"Austrialia",
		    "capital":"Canabra"       	 
		     		 },		             
		            ],
		
		"dataTable":[
		             {lastName:"Verma",firstName:"Manoj",gender:"Male"},
		             {lastName:"Kumar",firstName:"Ankit",gender:"Male"},
		             {lastName:"Gupta",firstName:"Manish",gender:"Male"}		            
		             ],
		 "dataTree":[
		                     {
		                    "index":"0",
		                    "level":"Success",
		                    "Message":"None"
		                     },
		                     {
				            "index":"1",
				            "level":"Warning",
				            "Message":"Alert"
				             },		             
		             
				             {
						     "index":"2",
						     "level":"Error",
						     "Message":"Bad"
						     }	            
		             
		            ]
		});
		        console.log("country");
			var oCombobox1= new sap.ui.commons.ComboBox("country",{
				change: function(oEvent){
				
			var oCombo= new sap.ui.getCore().getControl("capital");
		    var oItem2=new sap.ui.core.ListItem({
		    	text:"{Capital}"
		    });
		    oCombo.bindItems{"/dataCombo",oItem2};
				
				}
			});
		   var oCombobox2= new sap.ui.commons.ComboBox("capital",{
		   });
		 oCombobox1.bindItems{"/dataCombo",oItem1};
		 
			   var oTable = new sap.ui.table.Table({
				   title:"Aggreration",
				   visibleRowCount:3,
				   firstVisibleRow:3
			   });
			      oTable.addColumn(new sap.ui.table.Column({  
				   label:new sap.ui.commons.Label({text:"First Name"}),
				   template:new sap.ui.commons.TextField().bindProperty("value","firstName"),
				   sortProperty:"firstname",
				   filterProperty:"firstname",
				   width:"100px"
			   }));
			      oTable.addColumn(new sap.ui.table.Column({  
					   label:new sap.ui.commons.Label({text:"Last Name"}),
					   template:new sap.ui.commons.TextField().bindProperty("value","lastName"),
					   sortProperty:"lastname",
					   filterProperty:"lastname",
					   width:"100px"
				   }));
			      oTable.addColumn(new sap.ui.table.Column({  
					   label:new sap.ui.commons.Label({text:"Gender"}),
					   template:new sap.ui.commons.TextField().bindProperty("value","gender"),
					   sortProperty:"gender",
					   filterProperty:"gender",
					   width:"100px"
				   }));
			      oTable.setModel(oModel);
			      oTable.bindRows("/dataTable");
			      var oRow = new sap.ui.commons.message({
			    	  text:"{msg}",
			    	  type:"{level}"
			      });
			      var oRepeater = new sap.ui.commons.RowRepeater();
			    	  oRepeater.bindRows("/dataTree",oRow) ;
			      
		   }
});
