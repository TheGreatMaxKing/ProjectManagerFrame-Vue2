import Mock from 'mockjs'

// 原始Mock版本 含有三级项目
// Mock.mock('/project/page', 'post', function () {
//   //拦截到请求后的处理逻辑
//   let obj = {
//     data: {
//       list: [
//         {
//           name: "ScrumP1wwwwwwwwwwww",
//           type: "scrum",
//           id: "1",
//           // searchIndex: 0,
//           // childsearched: true,
//           children: [
//             {
//               name: "ScrumP1-1",
//               type: "scrum",
//               id: "2",
//               // searchIndex: 0,
//               // childsearched: true,
//               // children: [],
//             },
//             {
//               name: "ScrumP1-2",
//               type: "scrum",
//               id: "3",
//               children: [
//                 {
//                   name: "ScrumP1-2-1",
//                   type: "scrum",
//                   id: "4",
//                   // searchIndex: 0,
//                   // childsearched: true,
//                   // children: [],
//                 },
//                 {
//                   name: "ScrumP1-2-2",
//                   type: "scrum",
//                   id: "5",
//                   // searchIndex: 0,
//                   // childsearched: true,
//                   // children: [],
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           name: "WaterfallP1-1",
//           type: "waterfall",
//           id: "6",
//           // searchIndex: 0,
//           // childsearched: true,
//           // children: [],
//         },
//         {
//           name: "ScrumP1wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
//           type: "scrum",
//           id: "7",
//           // searchIndex: 0,
//           // childsearched: true,
//           children: [
//             {
//               name: "ScrumP1-1",
//               type: "scrum",
//               id: "8",
//               // searchIndex: 0,
//               // childsearched: true,
//               // children: [],
//             },
//             {
//               name: "ScrumP1-2",
//               type: "scrum",
//               id: "9",
//               // searchIndex: 0,
//               // childsearched: true,
//               children: [
//                 {
//                   name: "ScrumP1-2-1",
//                   type: "scrum",
//                   id: "10",
//                   // searchIndex: 0,
//                   // childsearched: true,
//                   // children: [],
//                 },
//                 {
//                   name: "ScrumP1-2-2",
//                   type: "scrum",
//                   id: "11",
//                   // searchIndex: 0,
//                   // childsearched: true,
//                   // children: [],
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           name: "WaterfallP1-1",
//           type: "waterfall",
//           id: "12",
//           // searchIndex: 0,
//           // childsearched: true,
//           // children: [],
//         },
//       ]
//     }
//   }
//   return obj
// })

// Kelly版本
Mock.mock('/project/page', 'post', function () {
  //拦截到请求后的处理逻辑
  let obj =
  {
    "code": 200,
    "message": "操作成功",
    "data": {
      "pageNum": 1,
      "pageSize": 100,
      "totalPage": 1,
      "total": 15,
      "list": [
        {
          "id": 19,
          "parentId": 0,
          "projectName": "WW",
          "enablePublic": false,
          "templateId": 2,
          "children": [],
          "createDt": "2023-02-09T17:19:37",
          "updateDt": "2023-02-09T17:19:37",
          "projectDesc": null
        },
        {
          "id": 7,
          "parentId": 0,
          "projectName": "project-6",
          "enablePublic": false,
          "templateId": 2,
          "children": [],
          "createDt": "2023-02-09T06:46:01",
          "updateDt": "2023-02-09T06:46:01",
          "projectDesc": null
        },
        {
          "id": 1,
          "parentId": 0,
          "projectName": "project-0",
          "enablePublic": false,
          "templateId": 2,
          "children": [],
          "createDt": "2023-02-09T06:44:46",
          "updateDt": "2023-02-09T06:44:46",
          "projectDesc": null
        },
        {
          "id": 3,
          "parentId": 0,
          "projectName": "project-2",
          "enablePublic": false,
          "templateId": 2,
          "children": [],
          "createDt": "2023-02-09T06:46:01",
          "updateDt": "2023-02-09T06:46:01",
          "projectDesc": null
        },
        {
          "id": 13,
          "parentId": 0,
          "projectName": "WCQ",
          "enablePublic": false,
          "templateId": 2,
          "children": [
            {
              "id": 14,
              "parentId": 13,
              "projectName": "WCQ-project-0",
              "enablePublic": false,
              "templateId": 2,
              "children": [
                {
                  "id": 114,
                  "parentId": 14,
                  "projectName": "WCQ-project-0-1",
                  "enablePublic": false,
                  "templateId": 2,
                  "children": [],
                  "createDt": "2023-02-09T06:46:48",
                  "updateDt": "2023-02-09T06:46:48",
                  "projectDesc": {
                    "startDate": "2023-02-10",
                    "endDate": "2023-02-10",
                    "projectBg": "for TEST",
                    "projectObjective": "不明",
                    "deliveredProduct": "不明",
                    "kickoffDate": "2023-02-10",
                    "portfolioId": 1,
                    "portfolio": null,
                    "programId": 1,
                    "program": null,
                    "categoryId": 1,
                    "category": null,
                    "domainId": 1,
                    "domain": null,
                    "customerId": 1,
                    "customer": null,
                    "orgId": 1,
                    "org": null,
                    "projectStatusId": 1,
                    "projectStatus": {
                      "id": 1,
                      "name": "Ongoing"
                    }
                  }
                },
                {
                  "id": 120,
                  "parentId": 14,
                  "projectName": "测试项目1-1",
                  "enablePublic": false,
                  "templateId": 2,
                  "children": [],
                  "createDt": "2023-02-09T17:20:34",
                  "updateDt": "2023-02-13T14:43:15",
                  "projectDesc": null
                },
                {
                  "id": 115,
                  "parentId": 14,
                  "projectName": "WCQ-project-1-1",
                  "enablePublic": false,
                  "templateId": 2,
                  "children": [],
                  "createDt": "2023-02-09T06:47:01",
                  "updateDt": "2023-02-09T06:47:01",
                  "projectDesc": null
                }
              ],
              "createDt": "2023-02-09T06:46:48",
              "updateDt": "2023-02-09T06:46:48",
              "projectDesc": {
                "startDate": "2023-02-10",
                "endDate": "2023-02-10",
                "projectBg": "for TEST",
                "projectObjective": "不明",
                "deliveredProduct": "不明",
                "kickoffDate": "2023-02-10",
                "portfolioId": 1,
                "portfolio": null,
                "programId": 1,
                "program": null,
                "categoryId": 1,
                "category": null,
                "domainId": 1,
                "domain": null,
                "customerId": 1,
                "customer": null,
                "orgId": 1,
                "org": null,
                "projectStatusId": 1,
                "projectStatus": {
                  "id": 1,
                  "name": "Ongoing"
                }
              }
            },
            {
              "id": 20,
              "parentId": 13,
              "projectName": "测试项目1",
              "enablePublic": false,
              "templateId": 2,
              "children": [],
              "createDt": "2023-02-09T17:20:34",
              "updateDt": "2023-02-13T14:43:15",
              "projectDesc": null
            },
            {
              "id": 15,
              "parentId": 13,
              "projectName": "WCQ-project-1",
              "enablePublic": false,
              "templateId": 2,
              "children": [],
              "createDt": "2023-02-09T06:47:01",
              "updateDt": "2023-02-09T06:47:01",
              "projectDesc": null
            }
          ],
          "createDt": "2023-02-09T06:46:29",
          "updateDt": "2023-02-09T06:46:29",
          "projectDesc": {
            "startDate": "2023-02-10",
            "endDate": "2023-02-10",
            "projectBg": "for TEST",
            "projectObjective": "不明",
            "deliveredProduct": "不明",
            "kickoffDate": "2023-02-10",
            "portfolioId": 1,
            "portfolio": null,
            "programId": 1,
            "program": null,
            "categoryId": 1,
            "category": null,
            "domainId": 1,
            "domain": null,
            "customerId": 1,
            "customer": null,
            "orgId": 1,
            "org": null,
            "projectStatusId": 1,
            "projectStatus": {
              "id": 1,
              "name": "Ongoing"
            }
          }
        },
        {
          "id": 12,
          "parentId": 0,
          "projectName": "project-11",
          "enablePublic": false,
          "templateId": 2,
          "children": [],
          "createDt": "2023-02-09T06:46:01",
          "updateDt": "2023-02-09T06:46:01",
          "projectDesc": null
        },
        {
          "id": 10,
          "parentId": 0,
          "projectName": "project-9",
          "enablePublic": false,
          "templateId": 2,
          "children": [],
          "createDt": "2023-02-09T06:46:01",
          "updateDt": "2023-02-09T06:46:01",
          "projectDesc": null
        },
        {
          "id": 16,
          "parentId": 0,
          "projectName": "WCD",
          "enablePublic": false,
          "templateId": 2,
          "children": [
            {
              "id": 17,
              "parentId": 16,
              "projectName": "WCQ-project-0",
              "enablePublic": false,
              "templateId": 2,
              "children": [],
              "createDt": "2023-02-09T06:47:39",
              "updateDt": "2023-02-09T06:47:39",
              "projectDesc": null
            },
            {
              "id": 18,
              "parentId": 16,
              "projectName": "WCQ-project-1",
              "enablePublic": false,
              "templateId": 2,
              "children": [],
              "createDt": "2023-02-09T06:47:39",
              "updateDt": "2023-02-09T06:47:39",
              "projectDesc": null
            }
          ],
          "createDt": "2023-02-09T06:47:39",
          "updateDt": "2023-02-09T06:47:39",
          "projectDesc": null
        },
        {
          "id": 9,
          "parentId": 0,
          "projectName": "project-8",
          "enablePublic": false,
          "templateId": 2,
          "children": [],
          "createDt": "2023-02-09T06:46:01",
          "updateDt": "2023-02-09T06:46:01",
          "projectDesc": null
        },
        {
          "id": 5,
          "parentId": 0,
          "projectName": "project-4",
          "enablePublic": false,
          "templateId": 2,
          "children": [],
          "createDt": "2023-02-09T06:46:01",
          "updateDt": "2023-02-09T06:46:01",
          "projectDesc": null
        },
        {
          "id": 4,
          "parentId": 0,
          "projectName": "project-3",
          "enablePublic": false,
          "templateId": 2,
          "children": [],
          "createDt": "2023-02-09T06:46:01",
          "updateDt": "2023-02-09T06:46:01",
          "projectDesc": null
        },
        {
          "id": 2,
          "parentId": 0,
          "projectName": "project-1",
          "enablePublic": false,
          "templateId": 2,
          "children": [],
          "createDt": "2023-02-09T06:46:01",
          "updateDt": "2023-02-09T06:46:01",
          "projectDesc": null
        },
        {
          "id": 6,
          "parentId": 0,
          "projectName": "project-5",
          "enablePublic": false,
          "templateId": 2,
          "children": [],
          "createDt": "2023-02-09T06:46:01",
          "updateDt": "2023-02-09T06:46:01",
          "projectDesc": null
        },
        {
          "id": 8,
          "parentId": 0,
          "projectName": "project-7",
          "enablePublic": false,
          "templateId": 2,
          "children": [],
          "createDt": "2023-02-09T06:46:01",
          "updateDt": "2023-02-09T06:46:01",
          "projectDesc": null
        },
        {
          "id": 11,
          "parentId": 0,
          "projectName": "project-10",
          "enablePublic": false,
          "templateId": 2,
          "children": [],
          "createDt": "2023-02-09T06:46:01",
          "updateDt": "2023-02-09T06:46:01",
          "projectDesc": null
        }
      ]
    }
  }
  return obj
})