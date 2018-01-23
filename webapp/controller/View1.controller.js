sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel', 'sap/viz/ui5/data/FlattenedDataset',
		'sap/viz/ui5/controls/common/feeds/FeedItem', 'sap/m/Label',
		'sap/m/ColumnListItem', 'sap/m/library', 'sap/m/MessageToast', 'sap/m/Column'
	],
	function(Controller, JSONModel, FlattenedDataset, FeedItem, Label, ColumnListItem, MobileLibrary, MessageToast, Column) {
		"use strict";
		var viewScope = "ownData"; //companyData
		var oPageController = Controller.extend("com.ks.modelzten_json_model.controller.View1", {
			/* ============================================================ */
			/* Constants                                                    */
			/* ============================================================ */
			/**
			 * Constants used in the example.
			 *
			 * @private
			 * @property {String} sampleName Name of the chart container sample
			 * @property {Object} vizFrame Viz Frame used in the view
			 * @property {String} vizFrame.id Id of the Viz Frame
			 * @property {Object} vizFrame.dataset Config used for the Viz Frame Flattened data
			 * @property {Object[]} vizFrame.dataset.dimensions Flattened data dimensions
			 * @property {Object[]} vizFrame.dataset.measures Flattened data measures
			 * @property {Object} vizFrame.dataset.data Flattened data other config
			 * @property {Object} vizFrame.dataset.data.path Flattened data path
			 * @property {String} vizFrame.modulePath Path to the module's data
			 * @property {String} vizFrame.type Viz Frame Type
			 * @property {Object} vizFrame.properties Viz Frame properties
			 * @property {Object} vizFrame.properties.plotArea Viz Frame plot area property
			 * @property {Object} vizFrame.properties.plotArea.showGap Viz Frame plot area property
			 * @property {Object[]} vizFrame.feedItems Viz Frame feed items
			 * @property {Object} table Table used in the view
			 * @property {String} table.id Id of the table
			 * @property {String} table.itemBindingPath Item binding path
			 * @property {String[]} table.columnLabelTexts Array of table column labels
			 * @property {String[]} table.columnLabelTexts Array of table template cell labels
			 * @property {String} table.modulePath Path to the table data
			 */
			_constants: {
				sampleName: "com.ks.modelzten_json_model",
				vizFrame: {
					id: "chartContainerVizFrame",
					id2: "chartContainerVizFrame2",
					id3: "chartContainerVizFrame3",
					dataset: {
						dimensions: [{
							name: 'Area',
							value: "{Area}"
						}],
						measures: [{
							group: 1,
							name: 'PTQ',
							value: '{PTQ}'
						}],
						data: {
							path: "/Areas"
						}
					},
					areaDataset: {
						dimensions: [{
							name: 'Area',
							value: "{Area}"
						}],
						measures: [{
							group: 1,
							name: 'PTQ',
							value: '{PTQ}'
						}],
						data: {
							path: "/Areas"
						}
					},
					regionDataset: {
						dimensions: [{
							name: 'Area',
							value: "{Area}"
						}],
						measures: [{
							group: 1,
							name: 'PTQ',
							value: '{PTQ}'
						}],
						data: {
							path: "/Regions"
						}
					},
					territoryDataset: {
						dimensions: [{
							name: 'Area',
							value: "{Area}"
						}],
						measures: [{
							group: 1,
							name: 'PTQ',
							value: '{PTQ}'
						}],
						data: {
							path: "/Territories"
						}
					},
					modulePath: "/model/localData/ChartContainerData1.json",
					type: "column", //"vertical_bullet", //"bullet", //"column", //"bar",  //
					properties: {
						plotArea: {
							showGap: true
						}
					},
					feedItems: [{
						'uid': "primaryValues", //"actualValues",
						'type': "Measure",
						'values': ["PTQ"]
					}, {
						'uid': "axisLabels", // "categoryAxis", for the vertical bulllet chart
						'type': "Dimension",
						'values': ["Area"]
					}]
				},
				vizFrame2: {
					id: "chartContainerVizFrame",
					id2: "chartContainerVizFrame2",
					id3: "chartContainerVizFrame3",
					dataset: {
						dimensions: [{
							name: 'Area',
							value: "{Area}"
						}],
						measures: [{
							group: 1,
							name: 'Booking',
							value: '{Booking}'
						}, {
							group: 1,
							name: 'Quota',
							value: '{Quota}'
						}],
						data: {
							path: "/Areas"
						}
					},
					areaDataset: {
						dimensions: [{
							name: 'Area',
							value: "{Area}"
						}],
						measures: [{
							group: 1,
							name: 'Booking',
							value: '{Booking}'
						}, {
							group: 1,
							name: 'Quota',
							value: '{Quota}'
						}],
						data: {
							path: "/Areas"
						}
					},
					regionDataset: {
						dimensions: [{
							name: 'Area',
							value: "{Area}"
						}],
						measures: [{
							group: 1,
							name: 'Booking',
							value: '{Booking}'
						}, {
							group: 1,
							name: 'Quota',
							value: '{Quota}'
						}],
						data: {
							path: "/Regions"
						}
					},
					territoryDataset: {
						dimensions: [{
							name: 'Area',
							value: "{Area}"
						}],
						measures: [{
							group: 1,
							name: 'Booking',
							value: '{Booking}'
						}, {
							group: 1,
							name: 'Quota',
							value: '{Quota}'
						}],
						data: {
							path: "/Territories"
						}
					},
					modulePath: "/model/localData/ChartContainerData2.json",
					type: "vertical_bullet", //"bullet", //"column", //"bar",  //
					properties: {
						plotArea: {
							showGap: true
						}
					},
					feedItems: [{
						'uid': "actualValues",
						'type': "Measure",
						'values': ["Booking"] // ["PTQ"]
					}, {
						'uid': "categoryAxis",
						'type': "Dimension",
						'values': ["Area"]
					}, { //for the bullet chart
						'uid': "targetValues",
						'type': "Measure",
						'values': ["Quota"]
					}]
				},
				table: {
					id: "chartContainerContentTable",
					id2: "chartContainerContentTable2",
					id3: "chartContainerContentTable3",
					itemBindingPath: "/Regions",
					areaBindingPath: "/Areas",
					regionBindingPath: "/Regions",
					territoryBindingPath: "/Territories",
					columnLabelTexts: ["Area", "PTQ"],
					templateCellLabelTexts: ["{Area}", "{PTQ}"],
					modulePath: "/model/localData/ChartContainerData1.json"
				},
				table2: {
					id: "chartContainerContentTable",
					id2: "chartContainerContentTable2",
					id3: "chartContainerContentTable3",
					itemBindingPath: "/Areas",
					areaBindingPath: "/Areas",
					regionBindingPath: "/Regions",
					territoryBindingPath: "/Territories",
					columnLabelTexts: ["Area", "Booking", "Quota"], //["Area", "PTQ"],
					templateCellLabelTexts: ["{Area}", "{Booking}", "{Quota}"], //["{Area}", "{PTQ}"],
					modulePath: "/model/localData/ChartContainerData2.json"
				}
			},
			/* ============================================================ */
			/* Life-cycle Handling                                          */
			/* ============================================================ */
			/**
			 * Method called when the application is initalized.
			 *
			 * @public
			 */
			upDateChart: function() {
				var oVizFrame = this._constants.vizFrame2;
				this._updateVizFrame(this.oVizFrame, oVizFrame);
				this._updateVizFrame(this.oVizFrame2, oVizFrame);
				this._updateVizFrame(this.oVizFrame3, oVizFrame);
			},

			resetChart: function() {

				//here I need to repaint the chart, so need to destroy it
				this.oVizFrame.destroyDataset();
				this.oVizFrame.destroyFeeds();

				this.oVizFrame2.destroyDataset();
				this.oVizFrame2.destroyFeeds();

				this.oVizFrame3.destroyDataset();
				this.oVizFrame3.destroyFeeds();

				this.oTable3.destroyColumns(); //removing the previous column
				this.oTable2.destroyColumns();
				this.oTable.destroyColumns();
			},
			onChangeDataScope: function(oEvt) {
				var oScopeToggleBtn = oEvt.getSource();
				//	var oVizFrame = this.getView().byId(this._constants.vizFrame.id);
				if (oScopeToggleBtn.getPressed()) {
					oScopeToggleBtn.setText("Own Data");
					oScopeToggleBtn.setIcon("sap-icon://personnel-view");
					this.viewScope = "companyData";
					this.resetChart();
					var oVizFrame2 = this._constants.vizFrame2;
					this._updateVizFrame(this.oVizFrame, "area", oVizFrame2);
					this._updateVizFrame(this.oVizFrame2, "region", oVizFrame2);
					this._updateVizFrame(this.oVizFrame3, "territory", oVizFrame2);
					var table2 = this._constants.table2;
					this._updateTable(this.oTable, "area", table2);
					this._updateTable(this.oTable2, "region", table2);
					this._updateTable(this.oTable3, "territory", table2);
				} else {
					oScopeToggleBtn.setText("Company Data");
					oScopeToggleBtn.setIcon("sap-icon://company-view");
					this.viewScope = "ownData";
					this.resetChart();
					var oVizFrame = this._constants.vizFrame;
					this._updateVizFrame(this.oVizFrame, "area", oVizFrame);
					this._updateVizFrame(this.oVizFrame2, oVizFrame);
					this._updateVizFrame(this.oVizFrame3, oVizFrame);

					var table = this._constants.table;
					this._updateTable(this.oTable, "area", table);
					this._updateTable(this.oTable2, "region", table);
					this._updateTable(this.oTable3, "territory", table);

				}
			},
			onTimeChanged: function() {
				MessageToast.show("time changed");
			},
			onInit: function() {

				//first chart and table for area
				this.oVizFrame = this.getView().byId(this._constants.vizFrame.id);
				this.oTable = this.getView().byId(this._constants.table.id);
				this._updateVizFrame(this.oVizFrame, "area");
				this._updateTable(this.oTable, "area");

				//for the second chart and table for region
				this.oVizFrame2 = this.getView().byId(this._constants.vizFrame.id2);
				this.oTable2 = this.getView().byId(this._constants.table.id2);
				this._updateVizFrame(this.oVizFrame2, "region");
				this._updateTable(this.oTable2, "region");

				//for the third chart and table -> territory	
				this.oVizFrame3 = this.getView().byId(this._constants.vizFrame.id3);
				this.oTable3 = this.getView().byId(this._constants.table.id3);
				this._updateVizFrame(this.oVizFrame3, "territory");
				this._updateTable(this.oTable3, "territory");
			},
			/* ============================================================ */
			/* Helper Methods                                               */
			/* ============================================================ */
			/**
			 * Updated the Viz Frame in the view.
			 *
			 * @private
			 * @param {sap.viz.ui5.controls.VizFrame} vizFrame Viz Frame that needs to be updated
			 */
			_updateVizFrame: function(vizFrame, chartType, oVizFrame) {  //vizframe: the chart type, charttype: area, region, terr .//ovizframe: reference
				if (!oVizFrame) {
					oVizFrame = this._constants.vizFrame;
				}
				var oVizFramePath = jQuery.sap.getModulePath(this._constants.sampleName, oVizFrame.modulePath);
				var oModel = new JSONModel(oVizFramePath);
				var oDataset;
				if (chartType) {
					switch (chartType) {
						case "area":
						oDataset = new FlattenedDataset(oVizFrame.areaDataset);
							break;
						case "region":
							oDataset = new FlattenedDataset(oVizFrame.regionDataset);
							break;
						case "territory":
							oDataset = new FlattenedDataset(oVizFrame.territoryDataset);
							break;
						default:
							oDataset = new FlattenedDataset(oVizFrame.areaDataset);
							break;
					}
				} 

			

				vizFrame.setVizProperties(oVizFrame.properties);
				vizFrame.setDataset(oDataset);
				vizFrame.setModel(oModel);
				this._addFeedItems(vizFrame, oVizFrame.feedItems);
				vizFrame.setVizType(oVizFrame.type);

				var oPopOver = this.getView().byId("idPopOver");
				oPopOver.connect(vizFrame.getVizUid());
			},
			/**
			 * Updated the Table in the view.
			 *
			 * @private
			 * @param {sap.m.table} table Table that needs to be updated
			 */
			_updateTable: function(table,  tableType, oTable) {  //table: table reference, //table type: area, region, terr // otable: viz properties
				if (!oTable) {
					oTable = this._constants.table;
				}
				var oTablePath = jQuery.sap.getModulePath(this._constants.sampleName, oTable.modulePath);
				var oTableModel = new JSONModel(oTablePath);
				var aColumns = this._createTableColumns(oTable.columnLabelTexts);

				for (var i = 0; i < aColumns.length; i++) {
					table.addColumn(aColumns[i]);
				}

				var oTableTemplate = new ColumnListItem({
					type: MobileLibrary.ListType.Active,
					cells: this._createLabels(oTable.templateCellLabelTexts)
				});

				if (tableType) {
					switch (tableType) {
						case "area":
							table.bindItems(oTable.areaBindingPath, oTableTemplate);
							break;
						case "region":
							table.bindItems(oTable.regionBindingPath, oTableTemplate);
							break;
						case "territory":
							table.bindItems(oTable.territoryBindingPath, oTableTemplate);
							break;
						default:
							table.bindItems(oTable.itemBindingPath, oTableTemplate);
							break;
					}
				} else {
					table.bindItems(oTable.itemBindingPath, oTableTemplate);
				}

				table.setModel(oTableModel);

				//	table.bindElement("/Areas");
			},
			/**
			 * Adds the passed feed items to the passed Viz Frame.
			 *
			 * @private
			 * @param {sap.viz.ui5.controls.VizFrame} vizFrame Viz Frame to add feed items to
			 * @param {Object[]} feedItems Feed items to add
			 */
			_addFeedItems: function(vizFrame, feedItems) {
				for (var i = 0; i < feedItems.length; i++) {
					vizFrame.addFeed(new FeedItem(feedItems[i]));
				}
			},
			/**
			 * Creates table columns with labels as headers.
			 *
			 * @private
			 * @param {String[]} labels Column labels
			 * @returns {sap.m.Column[]} Array of columns
			 */
			_createTableColumns: function(labels) {
				var aLabels = this._createLabels(labels);
				return this._createControls(Column, "header", aLabels);
			},
			/**
			 * Creates label control array with the specified texts.
			 *
			 * @private
			 * @param {String[]} labelTexts text array
			 * @returns {sap.m.Column[]} Array of columns
			 */
			_createLabels: function(labelTexts) {
				return this._createControls(Label, "text", labelTexts);
			},
			/**
			 * Creates an array of controls with the specified control type, property name and value.
			 *
			 * @private
			 * @param {sap.ui.core.Control} Control Control type to create
			 * @param {String} prop Property name
			 * @param {Array} propValues Value of the control's property
			 * @returns {sap.ui.core.Control[]} array of the new controls
			 */
			_createControls: function(Control, prop, propValues) {
				var aControls = [];
				var oProps = {};
				for (var i = 0; i < propValues.length; i++) {
					oProps[prop] = propValues[i];
					aControls.push(new Control(oProps));
				}
				return aControls;
			}
		});
		return oPageController;
	});