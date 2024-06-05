import requests
import base64

# Replace with your Azure DevOps organization name, project name, and personal access token
organization = 'Omt'
project = 'Pythject'
token = 'k6db4ndrynryjujqvecyf7idvxq3ty63p5fhcq'

# The Work Items - Create endpoint URL
#url = f"https://dev.azure.com/{organization}/{project}/_apis/wit/workitems/$Task?api-version=6.0"
url = f"https://dev.azure.com/{organization}/{project}/_apis/wit/workitems/$Task?api-version=7.1-preview.3"

# Base64 encode the PAT for the Authorization header
encoded_token = base64.b64encode(f':{token}'.encode()).decode()

# Headers for the request$Task?api
headers = {
    "Content-Type": "application/json-patch+json",
    "Authorization": f"Basic {encoded_token}"
}

# The task details
task_details = [
    {
        "op": "add",
        "path": "/fields/System.Title",
        "value": "Configuration of XYZ Pipeline"
    },
    {
        "op": "add",
        "path": "/fields/System.Description",
        "value": "Configured pipeline for xyz project"
    },
    {
        "op": "add",
        "path": "/fields/System.AssignedTo",
        "value": "omkarlukar18@outlook.com"
    },
    {
        "op": "add",
        "path": "/fields/Microsoft.VSTS.Common.Priority",
        "value": 1
    }
]

# Make the POST request to create the task
response = requests.post(url, headers=headers, json=task_details)

# Check if the request was successful
if response.status_code in [200, 201]:
    print("Task created successfully.")
    print(response.json())
else:
    print("Failed to create task.")
    print(f"Status code: {response.status_code}")
    print(f"Response: {response.text}")
