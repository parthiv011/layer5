"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[8124],{31140:function(e,t,l){l.r(t),l.d(t,{Head:function(){return d},default:function(){return E}});var n=l(67294),r=l(17875),a=l(37242),u=l(72606),c=l(90075),m=l(31992);var s=()=>n.createElement(u.U,null,n.createElement("div",{className:"page-header-section"},n.createElement("h1",null,"GitHub Process")),n.createElement(c.Z,null),n.createElement("div",{className:"page-section"},n.createElement(a.W2,null,n.createElement("div",{className:"content"},n.createElement("h2",null,"Issue and PR Labels and Templates, Bots"),n.createElement("br",null),n.createElement("h3",null,n.createElement("strong",null,"Overview")),n.createElement("br",null),n.createElement("p",null,"The Layer5 GitHub Process emphasizes consistent pull requests and issue labels to streamline continuous integration and reduce overhead across the growing repository collection."),n.createElement("p",null,"The number of repositories under the “Layer5io” organization is growing. In order to ensure consistency across the repositories and to decrease the time it takes for a continuous integration (GitHub Actions) to execute, consistent use of pull request and issue labels will aid in the reduction of overhead."),n.createElement("h3",null,"Issue and Pull Request Templates"),n.createElement("p",null,"Layer5 uses issue and pull request templates. See the `.github` folder in any repo for examples."),n.createElement("h3",null,"Template Repositories"),n.createElement("p",null,"Layer5 uses the following repository templates:"),n.createElement("ul",null,n.createElement("li",null,"layer5-repo-template"),n.createElement("li",null,"meshery-adapter-template")),n.createElement("h3",null,"Branch Protection"),n.createElement("p",null,"Layer5 protects the ",n.createElement("b",null,"master")," branch by requiring reviews from at least one approver."),n.createElement("h3",null,"Organization Secrets"),n.createElement("p",null,"Layer5 has the following org-wide secrets available:"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,n.createElement("b",null,"Secret Name")),n.createElement("th",null,n.createElement("b",null,"Description")))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"CYPRESS_RECORD_KEY"),n.createElement("td",null,"Needed for recording the Cypress run in the Cypress Dashboard")),n.createElement("tr",null,n.createElement("td",null,"DOCKER_PASSWORD"),n.createElement("td",null,"Belongs to user “mesheryci”")),n.createElement("tr",null,n.createElement("td",null,"DOCKER_USERNAME"),n.createElement("td",null,"“mesheryci”")),n.createElement("tr",null,n.createElement("td",null,"NETLIFY_AUTH_TOKEN"),n.createElement("td",null)),n.createElement("tr",null,n.createElement("td",null,"NETLIFY_SITE_ID"),n.createElement("td",null)),n.createElement("tr",null,n.createElement("td",null,"RELEASEDRAFTER_PAT"),n.createElement("td",null,"Belongs to user “l5io”")),n.createElement("tr",null,n.createElement("td",null,"RELEASE_NOTES_PAT"),n.createElement("td",null,"Belongs to user “l5io”")),n.createElement("tr",null,n.createElement("td",null,"SLACK_BOT_TOKEN"),n.createElement("td",null)),n.createElement("tr",null,n.createElement("td",null,"GITHUB_TOKEN"),n.createElement("td",null,"For the community scope repo that can be use commit and release")),n.createElement("tr",null,n.createElement("td",null,"NODE_VERSION"),n.createElement("td",null,"“v18” as of Nov 15, 2022.")),n.createElement("tr",null,n.createElement("td",null,"GO_VERSION"),n.createElement("td",null,"1.19")),n.createElement("tr",null,n.createElement("td",null,"PROVIDER_TOKEN"),n.createElement("td",null,"Infinite Meshery Cloud token")),n.createElement("tr",null,n.createElement("td",null,"NPM_TOKEN"),n.createElement("td",null,"l5io user’s token for publishing packages")),n.createElement("tr",null,n.createElement("td",null,"INTEGRATION_SPREADSHEET_CRED"),n.createElement("td",null,"Base64 encoded cred for accessing integration spreadsheet on behalf of user  ",n.createElement("a",{href:"mailto: no-reply@layer5.io"},"no-reply@layer5.io"))),n.createElement("tr",null,n.createElement("td",null,"PLAYGROUND_CONFIG"),n.createElement("td",null,"Base64 encoded kubeconfig of Playground")),n.createElement("tr",null,n.createElement("td",null,"METAL_SSH_KEY"),n.createElement("td",null,"SMP Project-wide SSH private key")),n.createElement("tr",null,n.createElement("td",null,"METAL_AUTH_TOKEN"),n.createElement("td",null,"Metal cli auth token")),n.createElement("tr",null,n.createElement("td",null,"METAL_SERVER1"),n.createElement("td",null,"ID of 1st metal server running playground")),n.createElement("tr",null,n.createElement("td",null,"METAL_SERVER2"),n.createElement("td",null,"ID of 2nd metal server running playground")))),n.createElement("h3",null,"Labels for Issues"),n.createElement("p",null,"The following list of GitHub issue labels are applied organization-wide. New repositories created as of June 13th, 2020 will contain these labels by default."),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,n.createElement("b",null,"labels")),n.createElement("th",null,n.createElement("b",null,"Description")),n.createElement("th",null,n.createElement("b",null,"Color")))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"area/ci"),n.createElement("td",null,"Continuous integration | Build and release"),n.createElement("td",null,"#5319e1")),n.createElement("tr",null,n.createElement("td",null,"area/docs"),n.createElement("td",null,"Improvements or additions to documentation"),n.createElement("td",null,"#5319e2")),n.createElement("tr",null,n.createElement("td",null,"area/lifecycle"),n.createElement("td",null,"Lifecycle management (install, uninstall, configure) related"),n.createElement("td",null,"#5319e3")),n.createElement("tr",null,n.createElement("td",null,"area/performance"),n.createElement("td",null,"Performance management"),n.createElement("td",null,"#5319e4")),n.createElement("tr",null,n.createElement("td",null,"area/tests"),n.createElement("td",null,"Testing / quality assurance"),n.createElement("td",null,"#5319e5")),n.createElement("tr",null,n.createElement("td",null,"area/ui"),n.createElement("td",null,"User Interface"),n.createElement("td",null,"#5319e6")),n.createElement("tr",null,n.createElement("td",null,"area/workloads"),n.createElement("td",null,"Applications / services"),n.createElement("td",null,"#5319e7")),n.createElement("tr",null,n.createElement("td",null,"area/helm"),n.createElement("td",null,"Helm charts issues"),n.createElement("td",null,"#5319e8")),n.createElement("tr",null,n.createElement("td",null,"component/api"),n.createElement("td",null,"API related"),n.createElement("td",null,"#3a0485")),n.createElement("tr",null,n.createElement("td",null,"component/mesheryctl"),n.createElement("td",null,"Meshery CLI related"),n.createElement("td",null,"#3a0486")),n.createElement("tr",null,n.createElement("td",null,"component/ui"),n.createElement("td",null),n.createElement("td",null,"#3a0486")),n.createElement("tr",null,n.createElement("td",null,"component/filters"),n.createElement("td",null),n.createElement("td",null)),n.createElement("tr",null,n.createElement("td",null,"component/patterns"),n.createElement("td",null),n.createElement("td",null,"#3a0486")),n.createElement("tr",null,n.createElement("td",null,"component/meshsync"),n.createElement("td",null,"MeshSync related"),n.createElement("td",null,"#3a0487")),n.createElement("tr",null,n.createElement("td",null,"component/meshery-perf"),n.createElement("td",null,"Meshery-perf related"),n.createElement("td",null,"#3a0488")),n.createElement("tr",null,n.createElement("td",null,"good first issue"),n.createElement("td",null,"Good for newcomers"),n.createElement("td",null,"#7057ff")),n.createElement("tr",null,n.createElement("td",null,"help wanted"),n.createElement("td",null,"Extra attention is needed"),n.createElement("td",null,"#35f48e")),n.createElement("tr",null,n.createElement("td",null,"issue/invite"),n.createElement("td",null,"When applied, this label triggers a to send an invitation to the issue author to join the respective GH org. Invitations are missing appropriate team assignments, however."),n.createElement("td",null,"#eeeeee")),n.createElement("tr",null,n.createElement("td",null,"issue/blocked"),n.createElement("td",null,"Issue is blocked"),n.createElement("td",null,"#eeeeee")),n.createElement("tr",null,n.createElement("td",null,"issue/design required"),n.createElement("td",null,"A labeler bot comments with a note stipulating the a design specification required prior to proceeding."),n.createElement("td",null,"#eeeeee")),n.createElement("tr",null,n.createElement("td",null,"issue/duplicate"),n.createElement("td",null,"This issue or pull request already exists"),n.createElement("td",null,"#eeeeee")),n.createElement("tr",null,n.createElement("td",null,"issue/invalid"),n.createElement("td",null,"This doesn't seem right"),n.createElement("td",null,"#eeeeee")),n.createElement("tr",null,n.createElement("td",null,"issue/stale"),n.createElement("td",null,"Issue has not had any activity for an extended period of time. Label is most often applied by a stale bot, working under specific inactivity timeouts."),n.createElement("td",null,"#eeeeee")),n.createElement("tr",null,n.createElement("td",null,"issue/tweet"),n.createElement("td",null,"Posts"),n.createElement("td",null,"#eeeeee")),n.createElement("tr",null,n.createElement("td",null,"issue/remind"),n.createElement("td",null,"A labeler bot comments on the issue with a helpful reminder to the current assignee that help is available, if needed, and a reminder that their issue remains outstanding (undone)."),n.createElement("td",null,"#eeeeee")),n.createElement("tr",null,n.createElement("td",null,"issue/willfix"),n.createElement("td",null,"This issue will be worked on. The stale bot honors this label and skips staleness consideration of issues with this label."),n.createElement("td",null,"#eeeeee")),n.createElement("tr",null,n.createElement("td",null,"kind/bug"),n.createElement("td",null,"Something isn't working"),n.createElement("td",null,"#088073")),n.createElement("tr",null,n.createElement("td",null,"kind/child"),n.createElement("td",null,"One of a number of issues relating to an epic"),n.createElement("td",null,"#088074")),n.createElement("tr",null,n.createElement("td",null,"kind/chore"),n.createElement("td",null,"Necessary task"),n.createElement("td",null,"#088075")),n.createElement("tr",null,n.createElement("td",null,"kind/enhancement"),n.createElement("td",null,"Improvement in current feature"),n.createElement("td",null,"#088076")),n.createElement("tr",null,n.createElement("td",null,"kind/epic"),n.createElement("td",null,"An issue that describes a set of concerns (issues)"),n.createElement("td",null,"#088077")),n.createElement("tr",null,n.createElement("td",null,"kind/feature"),n.createElement("td",null,"New major feature or request"),n.createElement("td",null,"#088078")),n.createElement("tr",null,n.createElement("td",null,"kind/proposal"),n.createElement("td",null,"Proposal request for project"),n.createElement("td",null,"#088079")),n.createElement("tr",null,n.createElement("td",null,"kind/question"),n.createElement("td",null,"Further information is requested"),n.createElement("td",null,"#088080")),n.createElement("tr",null,n.createElement("td",null,"language/go"),n.createElement("td",null,"Golang related"),n.createElement("td",null,"#16e2e2")),n.createElement("tr",null,n.createElement("td",null,"language/javascript"),n.createElement("td",null,"Javascript related"),n.createElement("td",null,"#16e2e3")),n.createElement("tr",null,n.createElement("td",null,"language/ruby"),n.createElement("td",null,"Ruby related"),n.createElement("td",null,"#16e2e4")),n.createElement("tr",null,n.createElement("td",null,"pr/dependencies"),n.createElement("td",null,"Dependabot or manual dependencies addressed in this PR"),n.createElement("td",null,"#0366d5")),n.createElement("tr",null,n.createElement("td",null,"pr/do-not-merge"),n.createElement("td",null,"PRs not ready to be merged"),n.createElement("td",null,"#0366d6")),n.createElement("tr",null,n.createElement("td",null,"pr/draft"),n.createElement("td",null,"WIP/Draft pull request"),n.createElement("td",null,"#0366d7")),n.createElement("tr",null,n.createElement("td",null,"pr/on hold"),n.createElement("td",null,"PR/Issue on hold"),n.createElement("td",null,"#0366d8")),n.createElement("tr",null,n.createElement("td",null,"priority/urgent"),n.createElement("td",null,"Issue to be addressed urgently"),n.createElement("td",null,"#f60205")),n.createElement("tr",null,n.createElement("td",null,"priority/high"),n.createElement("td",null,"High priority issue"),n.createElement("td",null,"#d60205")),n.createElement("tr",null,n.createElement("td",null,"priority/low"),n.createElement("td",null,"Low priority issue"),n.createElement("td",null,"#a60205")),n.createElement("tr",null,n.createElement("td",null,"service-mesh/app-mesh"),n.createElement("td",null,"Issues related to App Mesh"),n.createElement("td",null,"#57b6cc")),n.createElement("tr",null,n.createElement("td",null,"service-mesh/consul"),n.createElement("td",null,"Issues related to Consul"),n.createElement("td",null,"#57b6cc")),n.createElement("tr",null,n.createElement("td",null,"service-mesh/cpx"),n.createElement("td",null,"Issues related to CPX"),n.createElement("td",null,"#57b6cc")),n.createElement("tr",null,n.createElement("td",null,"service-mesh/istio"),n.createElement("td",null,"Issues related to Istio"),n.createElement("td",null,"#57b6cc")),n.createElement("tr",null,n.createElement("td",null,"service-mesh/kuma"),n.createElement("td",null,"Issues related to Kuma"),n.createElement("td",null,"#57b6cc")),n.createElement("tr",null,n.createElement("td",null,"service-mesh/linkerd"),n.createElement("td",null,"Issues related to Linkerd"),n.createElement("td",null,"#57b6cc")),n.createElement("tr",null,n.createElement("td",null,"service-mesh/maesh"),n.createElement("td",null,"Issues related to Maesh"),n.createElement("td",null,"#57b6cc")),n.createElement("tr",null,n.createElement("td",null,"service-mesh/nginx"),n.createElement("td",null,"ssues related to NGINX SM"),n.createElement("td",null,"#57b6cc")),n.createElement("tr",null,n.createElement("td",null,"service-mesh/nsm"),n.createElement("td",null,"Issues related to NSM"),n.createElement("td",null,"#57b6cc")),n.createElement("tr",null,n.createElement("td",null,"service-mesh/tanzu"),n.createElement("td",null,"Issues related to Tanzu"),n.createElement("td",null,"#57b6cc")))),n.createElement("h3",null,"List for Pull Requests"),n.createElement("p",null,"The following list of pull request labels will be used to both indicate purpose or status of the PR to maintainers, and significantly, they will be used in conditional logic during workflow execution to determine the PR’s appropriate path through the CI flow."),n.createElement("ul",null,n.createElement("li",null,n.createElement("b",null,"Refactor")," - Chore related pull request"),n.createElement("li",null,n.createElement("b",null,"Fix")," - Bug fixes PRs"),n.createElement("li",null,n.createElement("b",null,"On-hold")," - PR needs review before merging or it needs to behold until a specific issue is fixed."),n.createElement("li",null,n.createElement("b",null,"Dependabot")," - All dependabot related automated PRs"),n.createElement("li",null,n.createElement("b",null,"release")," - identifies that a release is / will be made"),n.createElement("li",null,n.createElement("b",null,"Draft")," - PR is in draft state, GitHub provides a way for the draft state but having a label will help us in triage purposes."),n.createElement("li",null,n.createElement("b",null,"Approved")," - Indicates a PR has been approved by approver form all required OWNERS files. #51ed31"),n.createElement("li",null,n.createElement("b",null,"help wanted")," - Extra attention is needed #008672"),n.createElement("li",null,n.createElement("b",null,"needs-ok-to-test")," -  #d60c6a"),n.createElement("li",null,n.createElement("b",null,"awaiting review")," - The PR is ready for the reviewer to review. #fbca04")),n.createElement("p",null,"Improving the build times through conditional logic that will skip sections of the ci.yml, unless these labels are present:"),n.createElement("ul",null,n.createElement("li",null,n.createElement("b",null,"docs")," -  build the Jekyll site for Meshery documentation"),n.createElement("li",null,n.createElement("b",null,"component/mesheryctl")," - build the Meshery CLI"),n.createElement("li",null,n.createElement("b",null,"area/ui")," -  build the Meshery UI"),n.createElement("li",null,n.createElement("b",null,"component/meshery-server")," - Assumed that Meshery Server should always be build, but this is not the case.")),n.createElement("h3",null,"Bots"),n.createElement("p",null,"Layer5 uses the following bots:"),n.createElement("ul",null,n.createElement("li",null,"Triage bot"),n.createElement("li",null,"Stale bot"),n.createElement("li",null,"Welcome bot"),n.createElement("li",null,"DCO bot")),n.createElement("h3",null,"Actions"),n.createElement("ul",null,n.createElement("li",null,"Labeler.yml"),n.createElement("li",null,"label-commenter.yml")),n.createElement("p",null,"Good resource - ",n.createElement("a",{href:"https://github.com/sdras/awesome-actions#pull-requests"},"https://github.com/sdras/awesome-actions#pull-requests"))))),n.createElement(m.Z,null));var E=()=>n.createElement(n.Fragment,null,n.createElement(s,null));const d=()=>n.createElement(r.Z,{title:"GitHub Process",description:"Streamlining continuous integration to reduce overhead across the growing repository collection."})}}]);
//# sourceMappingURL=component---src-pages-community-handbook-github-process-js-91d83111179857fe6d4f.js.map