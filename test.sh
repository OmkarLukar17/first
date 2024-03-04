#!/bin/bash

# Azure DevOps organization URL
ORG_URL="<your_organization_url>"

# Personal Access Token (PAT) with Agent Pools (Read & Manage) scope
PAT="<your_pat_token>"

# Agent pool name
AGENT_POOL="<agent_pool_name>"

# Agent name (optional, you can leave it empty for auto-generating)
AGENT_NAME=""

# Download and extract the agent package
echo "Downloading and extracting Azure Pipelines agent..."
curl -O https://vstsagentpackage.azureedge.net/agent/2.195.1/vsts-agent-linux-x64-2.195.1.tar.gz
tar zxvf vsts-agent-linux-x64-2.195.1.tar.gz

# Configure the agent
./config.sh --unattended \
  --url $ORG_URL \
  --auth pat \
  --token $PAT \
  --pool $AGENT_POOL \
  --agent $AGENT_NAME \
  --replace \
  --acceptTeeEula

# Run the agent as a service (you may need sudo privileges for this step)
sudo ./svc.sh install
sudo ./svc.sh start

echo "Azure Pipelines agent installation and configuration completed."
