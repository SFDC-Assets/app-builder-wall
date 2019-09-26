# sfdx force:config:set apiVersion=47.0
sfdx shane:org:create -f config/project-scratch-def.json -d 7 -s --wait 60 --userprefix wall -o df19.cg
sfdx force:source:push
sfdx force:user:permset:assign -n electron
sfdx shane:theme:activate -n "Electron"
sfdx shane:user:password:set -g User -l User -p salesforce1
sfdx force:org:open
# Review and accept the security update