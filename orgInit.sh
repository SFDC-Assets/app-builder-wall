# sfdx force:config:set apiVersion=47.0
# sfdx force:org:create -f config/project-scratch-def.json -d 7 -s -w 60
# sfdx force:source:push
# sfdx force:user:permset:assign -n DemoPerms
# Activate the Johnson & Johnson Theme
# sfdx shane:user:password:set -g User -l User -p salesforce1
# sfdx force:org:open
# Review and accept the security update