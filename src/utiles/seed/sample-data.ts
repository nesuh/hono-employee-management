export const samplePositions = [
    {
      "id": 1,
      "name": "CEO",
      "description": "Chief Executive Officer",
      "parentId": null,
      "children": [
        {
          "id": 2,
          "name": "CTO",
          "description": "Chief Technology Officer",
          "parentId": 1,
          "children": [
            {
              "id": 3,
              "name": "Project Manager",
              "description": "Manages Projects",
              "parentId": 2,
              "children": [
                {
                  "id": 4,
                  "name": "Product Owner",
                  "description": "Owns the Product",
                  "parentId": 3,
                  "children": [
                    {
                      "id": 5,
                      "name": "Tech Lead",
                      "description": "Leads the Tech Team",
                      "parentId": 4,
                      "children": [
                        {
                          "id": 6,
                          "name": "Frontend Developer",
                          "description": "Develops Frontend",
                          "parentId": 5,
                          "children": []
                        },
                        {
                          "id": 7,
                          "name": "Backend Developer",
                          "description": "Develops Backend",
                          "parentId": 5,
                          "children": []
                        },
                        {
                          "id": 8,
                          "name": "DevOps Engineer",
                          "description": "Manages Infrastructure",
                          "parentId": 5,
                          "children": []
                        }
                      ]
                    },
                    {
                      "id": 9,
                      "name": "QA Engineer",
                      "description": "Ensures Quality",
                      "parentId": 4,
                      "children": []
                    },
                    {
                      "id": 10,
                      "name": "Scrum Master",
                      "description": "Facilitates Scrum",
                      "parentId": 4,
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": 11,
          "name": "CFO",
          "description": "Chief Financial Officer",
          "parentId": 1,
          "children": [
            {
              "id": 12,
              "name": "Chef Accountant",
              "description": "Manages Accounts",
              "parentId": 11,
              "children": [
                {
                  "id": 13,
                  "name": "Financial Analyst",
                  "description": "Analyzes Finances",
                  "parentId": 12,
                  "children": []
                },
                {
                  "id": 14,
                  "name": "Account and Payable",
                  "description": "Manages Payables",
                  "parentId": 12,
                  "children": []
                }
              ]
            },
            {
              "id": 15,
              "name": "Internal Audit",
              "description": "Ensures Compliance",
              "parentId": 11,
              "children": []
            }
          ]
        },
        {
          "id": 16,
          "name": "COO",
          "description": "Chief Operating Officer",
          "parentId": 1,
          "children": [
            {
              "id": 17,
              "name": "Product Manager",
              "description": "Manages Products",
              "parentId": 16,
              "children": []
            },
            {
              "id": 18,
              "name": "Operation Manager",
              "description": "Manages Operations",
              "parentId": 16,
              "children": []
            },
            {
              "id": 19,
              "name": "Customer Relation",
              "description": "Manages Customer Relations",
              "parentId": 16,
              "children": []
            }
          ]
        },
        {
          "id": 20,
          "name": "HR",
          "description": "Human Resources",
          "parentId": 1,
          "children": []
        }
      ]
    }
  ]