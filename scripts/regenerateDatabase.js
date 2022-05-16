

load('databaseInit.js');

const PATH_TO_PROJECT = "[Base-Path-Placeholder]/cytee-demo-project"


try {
    db.functionInfo.insertMany([
  {
     
    "arguments": [
      {
        "App": []
      }
    ],
    "changeList": [],
    "dependencies": 0,
    "dependents": 0,
    "exportInfo": "export default",
    "exportName": "App",
    "fileId": "src/App",
    "functionHash": "4f1fdf43f14439f643f0d4ed0bc4b5ebb21262b52da0ef8e40b19fa1a9fc5e95",
    "functionId": "App",
    "functionRange": [740, 2461],
    "haveFunctionChanged": false,
    "numberOfTests": 0,
    "pathToProject": ""
  },
  {
     
    "arguments": [
      {
        "AboutUs": []
      }
    ],
    "changeList": [],
    "dependencies": 1,
    "dependents": 0,
    "exportInfo": "export default",
    "exportName": "AboutUs",
    "fileId": "src/MainApp/pages/AboutUs/AboutUs",
    "functionHash": "f911929d8fc52f6f5db248e41a8649c0c5f39f460f69bfa12d77a4ffd5f8abe8",
    "functionId": "AboutUs",
    "functionRange": [239, 1067],
    "haveFunctionChanged": false,
    "numberOfTests": 0,
    "pathToProject": ""
  },
  {
     
    "arguments": [
      {
        "ShoppingCart": []
      }
    ],
    "changeList": [],
    "dependencies": 2,
    "dependents": 0,
    "exportInfo": "export default",
    "exportName": "ShoppingCart",
    "fileId": "src/MainApp/pages/ShoppingCart/ShoppingCart",
    "functionHash": "cf237ab10923745c1d49808a76c2c910875dc8431bcd05bd92b4476b58237701",
    "functionId": "ShoppingCart",
    "functionRange": [726, 3782],
    "haveFunctionChanged": false,
    "numberOfTests": 0,
    "pathToProject": ""
  },
  {
     
    "arguments": [
      {
        "Welcome": []
      }
    ],
    "changeList": [],
    "dependencies": 3,
    "dependents": 0,
    "exportInfo": "export default",
    "exportName": "Welcome",
    "fileId": "src/MainApp/pages/Welcome/Welcome",
    "functionHash": "4d24b93d7969d0797fe8db2a1e3ba6438447d99ae7d488897ba1359b6aa2ca73",
    "functionId": "Welcome",
    "functionRange": [631, 2386],
    "haveFunctionChanged": false,
    "numberOfTests": 0,
    "pathToProject": ""
  },
  {
     
    "arguments": [
      {
        "Checkout": []
      }
    ],
    "changeList": [],
    "dependencies": 0,
    "dependents": 0,
    "exportInfo": "export default",
    "exportName": "Checkout",
    "fileId": "src/MainApp/pages/Checkout/Checkout",
    "functionHash": "c6afa17f677aefbb0a146b5ad68165e69b974fd8d7929e9364de28725383e34e",
    "functionId": "Checkout",
    "functionRange": [453, 1005],
    "haveFunctionChanged": false,
    "numberOfTests": 0,
    "pathToProject": ""
  },
  {
     
    "arguments": [
      {
        "ShoppingCartMiniDisplay": []
      }
    ],
    "changeList": [],
    "dependencies": 2,
    "dependents": 0,
    "exportInfo": "export default",
    "exportName": "ShoppingCartMiniDisplay",
    "fileId": "src/MainApp/components/ShoppingCartMiniDisplay/ShoppingCartMiniDisplay",
    "functionHash": "d02b567c04c7d4c09995f389aa18eb3e83e75eac62419f8800a130ed4f0d1f4d",
    "functionId": "ShoppingCartMiniDisplay",
    "functionRange": [427, 2885],
    "haveFunctionChanged": false,
    "numberOfTests": 0,
    "pathToProject": ""
  },
  {
     
    "arguments": [
      {
        "ItemListDisplay": [
          {
            "type": "ObjectPattern",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "itemList",
                  "range": [1313, 1321]
                },
                "computed": false,
                "value": {
                  "type": "Identifier",
                  "name": "itemList",
                  "range": [1313, 1321]
                },
                "kind": "init",
                "method": false,
                "shorthand": true,
                "range": [1313, 1321]
              }
            ],
            "range": [1312, 1322]
          }
        ]
      }
    ],
    "changeList": [],
    "dependencies": 4,
    "dependents": 0,
    "exportInfo": "export default",
    "exportName": "ItemListDisplay",
    "fileId": "src/MainApp/components/ItemListDisplay/ItemListDisplay",
    "functionHash": "d29b4464bebbd7f32bbf2ee0b7580f94f66479988ba877d6b50e46a21f2f1e02",
    "functionId": "ItemListDisplay",
    "functionRange": [1311, 10516],
    "haveFunctionChanged": false,
    "numberOfTests": 0,
    "pathToProject": ""
  },
  {
     
    "arguments": [
      {
        "itemInfo.getItems": []
      }
    ],
    "changeList": [],
    "dependencies": 0,
    "dependents": 1,
    "exportInfo": "export default",
    "exportName": "itemInfo",
    "fileId": "src/api/itemInfo",
    "functionHash": "08e5f291288296269df16b675426f8e273d71cdfc4850fd6ddef78f0a1d9b2d8",
    "functionId": "itemInfo.getItems",
    "functionRange": [584, 643],
    "haveFunctionChanged": false,
    "numberOfTests": 0,
    "pathToProject": ""
  },
  {
     
    "arguments": [
      {
        "itemInfo.getItemsById": [
          {
            "type": "Identifier",
            "name": "idsToFind",
            "range": [1239, 1248]
          }
        ]
      }
    ],
    "changeList": [],
    "dependencies": 0,
    "dependents": 0,
    "exportInfo": "export default",
    "exportName": "itemInfo",
    "fileId": "src/api/itemInfo",
    "functionHash": "6892feb099de9e68b9da71a6453f25700e7fb1644186de65343adf37fb939bb0",
    "functionId": "itemInfo.getItemsById",
    "functionRange": [1238, 1361],
    "haveFunctionChanged": false,
    "numberOfTests": 0,
    "pathToProject": ""
  },
  {
     
    "arguments": [
      {
        "shoppingCartReducerFunction": [
          {
            "type": "Identifier",
            "name": "state",
            "range": [342, 347]
          },
          {
            "type": "Identifier",
            "name": "action",
            "range": [349, 355]
          }
        ]
      }
    ],
    "changeList": [],
    "dependencies": 0,
    "dependents": 0,
    "exportInfo": "export",
    "exportName": "shoppingCartReducerFunction",
    "fileId": "src/reducers/ShoppingCartReducer",
    "functionHash": "d5029adb1f5e9aafd31964c92eeeb64a3213d33efb1022610574fd7e1c5d350e",
    "functionId": "shoppingCartReducerFunction",
    "functionRange": [341, 2017],
    "haveFunctionChanged": false,
    "numberOfTests": 0,
    "pathToProject": ""
  },
  {
     
    "arguments": [
      {
        "getDiscountPercentage": [
          {
            "type": "Identifier",
            "name": "previousPrice",
            "range": [532, 545]
          },
          {
            "type": "Identifier",
            "name": "currentPrice",
            "range": [547, 559]
          }
        ]
      }
    ],
    "changeList": [],
    "dependencies": 0,
    "dependents": 1,
    "exportInfo": "export",
    "exportName": "getDiscountPercentage",
    "fileId": "src/util/priceHandling",
    "functionHash": "92907cff397800b48629c5316376e57a4624b177df4866230a786e26922ed397",
    "functionId": "getDiscountPercentage",
    "functionRange": [531, 1034],
    "haveFunctionChanged": false,
    "numberOfTests": 0,
    "pathToProject": ""
  },
  {
     
    "arguments": [
      {
        "getTodayTimeStamp": []
      }
    ],
    "changeList": [],
    "dependencies": 0,
    "dependents": 3,
    "exportInfo": "export",
    "exportName": "getTodayTimeStamp",
    "fileId": "src/util/timeHandling",
    "functionHash": "ee299a3be78d14d1b93311ad9f88ebc39e0ec6e6c58e2816f836d09d9a9ea199",
    "functionId": "getTodayTimeStamp",
    "functionRange": [296, 387],
    "haveFunctionChanged": false,
    "numberOfTests": 0,
    "pathToProject": ""
  },
  {
     
    "arguments": [
      {
        "getDaysUntilDate": [
          {
            "type": "Identifier",
            "name": "startDateTimeStamp",
            "range": [801, 819]
          },
          {
            "type": "Identifier",
            "name": "endDateTimeStamp",
            "range": [821, 837]
          }
        ]
      }
    ],
    "changeList": [],
    "dependencies": 0,
    "dependents": 2,
    "exportInfo": "export",
    "exportName": "getDaysUntilDate",
    "fileId": "src/util/timeHandling",
    "functionHash": "0ece2135127e906d7c5696d47c84975a8d16bd52a85de71576ca56b16a5c98fd",
    "functionId": "getDaysUntilDate",
    "functionRange": [800, 1818],
    "haveFunctionChanged": false,
    "numberOfTests": 0,
    "pathToProject": ""
  },
  {
     
    "arguments": [
      {
        "calculateTotalPriceOfCart": [
          {
            "type": "Identifier",
            "name": "shoppingCartItems",
            "range": [683, 700]
          }
        ]
      }
    ],
    "changeList": [],
    "dependencies": 0,
    "dependents": 2,
    "exportInfo": "export",
    "exportName": "calculateTotalPriceOfCart",
    "fileId": "src/util/shoppingCartListHandling",
    "functionHash": "fcd7449876f21d64503d1227e677ec73605bd69edd4345a2b3a7bd452c4cadb5",
    "functionId": "calculateTotalPriceOfCart",
    "functionRange": [682, 1559],
    "haveFunctionChanged": false,
    "numberOfTests": 0,
    "pathToProject": ""
  },
  {
     
    "arguments": [
      {
        "getEntryByPropertyWithValue": [
          {
            "type": "Identifier",
            "name": "objectArray",
            "range": [821, 832]
          },
          {
            "type": "Identifier",
            "name": "propertyName",
            "range": [834, 846]
          },
          {
            "type": "Identifier",
            "name": "valueSearch",
            "range": [848, 859]
          }
        ]
      }
    ],
    "changeList": [],
    "dependencies": 0,
    "dependents": 1,
    "exportInfo": "export",
    "exportName": "getEntryByPropertyWithValue",
    "fileId": "src/util/objectArrayHandling",
    "functionHash": "4be1aa50734e893dbf6304850340233d666c23968a0270d9469e7a383bb702c8",
    "functionId": "getEntryByPropertyWithValue",
    "functionRange": [820, 1306],
    "haveFunctionChanged": false,
    "numberOfTests": 0,
    "pathToProject": ""
  },
  {
     
    "arguments": [
      {
        "getEntriesByPropertyWithValues": [
          {
            "type": "Identifier",
            "name": "objectArray",
            "range": [2087, 2098]
          },
          {
            "type": "Identifier",
            "name": "propertyName",
            "range": [2100, 2112]
          },
          {
            "type": "Identifier",
            "name": "valueSearchArray",
            "range": [2114, 2130]
          }
        ]
      }
    ],
    "changeList": [],
    "dependencies": 0,
    "dependents": 0,
    "exportInfo": "export",
    "exportName": "getEntriesByPropertyWithValues",
    "fileId": "src/util/objectArrayHandling",
    "functionHash": "b968ef76564497d62809a01ab6796e79949fd6c28d46ecbff855be0d80940912",
    "functionId": "getEntriesByPropertyWithValues",
    "functionRange": [2086, 2735],
    "haveFunctionChanged": false,
    "numberOfTests": 0,
    "pathToProject": ""
  },
  {
     
    "arguments": [
      {
        "sortByProperty": [
          {
            "type": "Identifier",
            "name": "objectArray",
            "range": [3856, 3867]
          },
          {
            "type": "Identifier",
            "name": "propertyName",
            "range": [3869, 3881]
          }
        ]
      }
    ],
    "changeList": [],
    "dependencies": 0,
    "dependents": 2,
    "exportInfo": "export",
    "exportName": "sortByProperty",
    "fileId": "src/util/objectArrayHandling",
    "functionHash": "7a22fabd863744b35c1ef7b563567f5d182cebaea4b64ef83ad802e5298243c0",
    "functionId": "sortByProperty",
    "functionRange": [3855, 4110],
    "haveFunctionChanged": false,
    "numberOfTests": 1,
    "pathToProject": ""
  }
]);
} catch (e) {
    print (e);
}

try{
    db.functionDependency.insertMany(
        [
  {
    "calledFileId": "src/util/timeHandling",
    "calledFunctionId": "getTodayTimeStamp",
    "fileId": "src/MainApp/pages/AboutUs/AboutUs",
    "functionId": "AboutUs",
    "pathToProject": ""
  },
  {
    "calledFileId": "src/util/objectArrayHandling",
    "calledFunctionId": "sortByProperty",
    "fileId": "src/MainApp/pages/ShoppingCart/ShoppingCart",
    "functionId": "ShoppingCart",
    "pathToProject": ""
  },
  {
    "calledFileId": "src/util/shoppingCartListHandling",
    "calledFunctionId": "calculateTotalPriceOfCart",
    "fileId": "src/MainApp/pages/ShoppingCart/ShoppingCart",
    "functionId": "ShoppingCart",
    "pathToProject": ""
  },
  {
    "calledFileId": "src/api/itemInfo",
    "calledFunctionId": "itemInfo.getItems",
    "fileId": "src/MainApp/pages/Welcome/Welcome",
    "functionId": "Welcome",
    "pathToProject": ""
  },
  {
    "calledFileId": "src/util/timeHandling",
    "calledFunctionId": "getDaysUntilDate",
    "fileId": "src/MainApp/pages/Welcome/Welcome",
    "functionId": "Welcome",
    "pathToProject": ""
  },
  {
    "calledFileId": "src/util/timeHandling",
    "calledFunctionId": "getTodayTimeStamp",
    "fileId": "src/MainApp/pages/Welcome/Welcome",
    "functionId": "Welcome",
    "pathToProject": ""
  },
  {
    "calledFileId": "src/util/objectArrayHandling",
    "calledFunctionId": "sortByProperty",
    "fileId": "src/MainApp/components/ShoppingCartMiniDisplay/ShoppingCartMiniDisplay",
    "functionId": "ShoppingCartMiniDisplay",
    "pathToProject": ""
  },
  {
    "calledFileId": "src/util/shoppingCartListHandling",
    "calledFunctionId": "calculateTotalPriceOfCart",
    "fileId": "src/MainApp/components/ShoppingCartMiniDisplay/ShoppingCartMiniDisplay",
    "functionId": "ShoppingCartMiniDisplay",
    "pathToProject": ""
  },
  {
    "calledFileId": "src/util/objectArrayHandling",
    "calledFunctionId": "getEntryByPropertyWithValue",
    "fileId": "src/MainApp/components/ItemListDisplay/ItemListDisplay",
    "functionId": "ItemListDisplay",
    "pathToProject": ""
  },
  {
    "calledFileId": "src/util/priceHandling",
    "calledFunctionId": "getDiscountPercentage",
    "fileId": "src/MainApp/components/ItemListDisplay/ItemListDisplay",
    "functionId": "ItemListDisplay",
    "pathToProject": ""
  },
  {
    "calledFileId": "src/util/timeHandling",
    "calledFunctionId": "getDaysUntilDate",
    "fileId": "src/MainApp/components/ItemListDisplay/ItemListDisplay",
    "functionId": "ItemListDisplay",
    "pathToProject": ""
  },
  {
    "calledFileId": "src/util/timeHandling",
    "calledFunctionId": "getTodayTimeStamp",
    "fileId": "src/MainApp/components/ItemListDisplay/ItemListDisplay",
    "functionId": "ItemListDisplay",
    "pathToProject": ""
  }
]
        );
} catch(e) {
    print (e);
} 

try{
    db.testInfo.insertMany(
[
  {
    "customName": "Sort by name in ascending order",
    "fileId": "src/util/objectArrayHandling",
    "functionId": "sortByProperty",
    "moduleData": {
      "argumentList": [
        {
          "subFunctionName": "sortByProperty",
          "argument": "objectArray",
          "type": "array",
          "value": [
            {
              "argument": "_array_0",
              "type": "object",
              "value": [
                {
                  "argument": "name",
                  "type": "string",
                  "value": "Ice Cream"
                },
                {
                  "argument": "price",
                  "type": "number",
                  "value": "25"
                }
              ]
            },
            {
              "argument": "_array_1",
              "type": "object",
              "value": [
                {
                  "argument": "name",
                  "type": "string",
                  "value": "Coffee"
                },
                {
                  "argument": "price",
                  "type": "number",
                  "value": "50"
                }
              ]
            },
            {
              "argument": "_array_2",
              "type": "object",
              "value": [
                {
                  "argument": "name",
                  "type": "string",
                  "value": "Apple"
                },
                {
                  "argument": "price",
                  "type": "number",
                  "value": "10"
                }
              ]
            }
          ]
        },
        {
          "subFunctionName": "sortByProperty",
          "argument": "propertyName",
          "type": "string",
          "value": "name"
        }
      ],
      "returnValue": {
        "type": "array",
        "equal": true,
        "value": [
          {
            "argument": "_array_0",
            "type": "object",
            "value": [
              {
                "argument": "name",
                "type": "string",
                "value": "Apple"
              },
              {
                "argument": "price",
                "type": "number",
                "value": "10"
              }
            ]
          },
          {
            "argument": "_array_1",
            "type": "object",
            "value": [
              {
                "argument": "name",
                "type": "string",
                "value": "Coffee"
              },
              {
                "argument": "price",
                "type": "number",
                "value": "50"
              }
            ]
          },
          {
            "argument": "_array_2",
            "type": "object",
            "value": [
              {
                "argument": "name",
                "type": "string",
                "value": "Ice Cream"
              },
              {
                "argument": "price",
                "type": "number",
                "value": "25"
              }
            ]
          }
        ],
        "argument": "returnValue"
      }
    },
    "pathToProject": ""
  }
]
        );
} catch(e) {
    print (e);
} 

try {
    db.functionInfo.updateMany(
            {pathToProject: ""},
            {
                $set: {
                    pathToProject: PATH_TO_PROJECT
                }
            }
        );
} catch (e) {
    print (e)
}

try {
    db.functionDependency.updateMany(
            {pathToProject: ""},
            {
                $set: {
                    pathToProject: PATH_TO_PROJECT
                }
            }
        );
} catch (e) {
    print (e)
}

try {
    db.testInfo.updateMany(
            {pathToProject: ""},
            {
                $set: {
                    pathToProject: PATH_TO_PROJECT
                }
            }
        );
} catch (e) {
    print (e)
}
