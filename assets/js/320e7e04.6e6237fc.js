"use strict";(self.webpackChunkdevops_wiki=self.webpackChunkdevops_wiki||[]).push([[89],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=l,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(k,o(o({ref:n},p),{},{components:t})):r.createElement(k,o({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2357:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(7462),l=t(3366),a=(t(7294),t(3905)),o=["components"],i={},s=void 0,c={unversionedId:"practice/docker/installation",id:"practice/docker/installation",title:"installation",description:"Docker installation differs on different linux editions.",source:"@site/docs/practice/docker/installation.mdx",sourceDirName:"practice/docker",slug:"/practice/docker/installation",permalink:"/devops-wiki/docs/practice/docker/installation",editUrl:"https://github.com/zhoulf1006/devops-wiki/edit/master/docs/practice/docker/installation.mdx",tags:[],version:"current",frontMatter:{},sidebar:"practiceSidebar",previous:{title:"K8s Log Management",permalink:"/devops-wiki/docs/practice/aks/k8s-log-mgmt"},next:{title:"Resize xfs Root Partition",permalink:"/devops-wiki/docs/practice/linux/resize-root-partition-on-xfs"}},p=[{value:"Install on CentOS7",id:"install-on-centos7",children:[{value:"Install with <code>yum</code>",id:"install-with-yum",children:[],level:3},{value:"Config &amp; Start docker",id:"config--start-docker",children:[],level:3}],level:2},{value:"Install on Ubuntu",id:"install-on-ubuntu",children:[{value:"Install with <code>apt-get</code>",id:"install-with-apt-get",children:[],level:3},{value:"Check installation",id:"check-installation",children:[],level:3}],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Docker installation differs on different linux editions."),(0,a.kt)("h2",{id:"install-on-centos7"},"Install on CentOS7"),(0,a.kt)("p",null,"CICD machine including selfci vms on aws and deploy vms on azure are CentOS7."),(0,a.kt)("h3",{id:"install-with-yum"},"Install with ",(0,a.kt)("inlineCode",{parentName:"h3"},"yum")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y yum-utils device-mapper-persistent-data lvm2\nyum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\nyum install -y docker-ce docker-ce-cli containerd.io\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You may met the following errors")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Error: Package: audit-libs-python-2.8.5-4.el7.x86_64 (base)\n           Requires: audit-libs(x86-64) = 2.8.5-4.el7\n           Installed: audit-libs-2.7.6-3.el7.x86_64 (@anaconda)\n               audit-libs(x86-64) = 2.7.6-3.el7\n           Available: audit-libs-2.4.5-6.el6.x86_64 (aloong-repo)\n               audit-libs(x86-64) = 2.4.5-6.el6\nError: Package: policycoreutils-python-2.5-34.el7.x86_64 (base)\n           Requires: policycoreutils = 2.5-34.el7\n           Installed: policycoreutils-2.5-33.el7.x86_64 (@base)\n               policycoreutils = 2.5-33.el7\n           Available: policycoreutils-2.0.83-30.1.el6_8.x86_64 (aloong-repo)\n               policycoreutils = 2.0.83-30.1.el6_8\n You could try using --skip-broken to work around the problem\n You could try running: rpm -Va --nofiles --nodigest\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Download package and install dependencies")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://rpmfind.net/linux/centos/7.9.2009/os/x86_64/Packages/audit-libs-2.8.5-4.el7.x86_64.rpm\nwget https://rpmfind.net/linux/centos/7.9.2009/os/x86_64/Packages/policycoreutils-2.5-34.el7.x86_64.rpm\nwget https://rpmfind.net/linux/centos/7.9.2009/os/x86_64/Packages/libselinux-utils-2.5-15.el7.x86_64.rpm\nwget https://rpmfind.net/linux/centos/7.9.2009/os/x86_64/Packages/libsepol-2.5-10.el7.x86_64.rpm\nwget https://rpmfind.net/linux/centos/7.9.2009/os/x86_64/Packages/libselinux-2.5-15.el7.x86_64.rpm\nwget https://rpmfind.net/linux/centos/7.9.2009/os/x86_64/Packages/libsemanage-2.5-14.el7.x86_64.rpm\n\n# install sequence:\nlibsepol -> libselinux -> libsemanage -> libselinux-utils -> policycoreutils\n\nyum install -y libsepol-2.5-10.el7.x86_64.rpm libselinux-2.5-15.el7.x86_64.rpm libsemanage-2.5-14.el7.x86_64.rpm libselinux-utils-2.5-15.el7.x86_64.rpm policycoreutils-2.5-34.el7.x86_64.rpm audit-libs-2.8.5-4.el7.x86_64.rpm\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Retry install docker")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y docker-ce docker-ce-cli containerd.io\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Disable docker repo after successful installation")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum-config-manager --disable docker-ce-stable\n")),(0,a.kt)("h3",{id:"config--start-docker"},"Config & Start docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'mkdir -p /etc/docker /data/tools/docker\ncat << EOF >/etc/docker/daemon.json\n{\n  "exec-opts": ["native.cgroupdriver=systemd"],\n  "data-root": "data/tools/docker",\n  "log-driver": "json-file",\n  "log-opts": {\n  "max-size": "100m"\n  },\n    "storage-driver": "overlay2",\n    "storage-opts": [\n        "overlay2.override_kernel_check=true"\n    ]\n  }\n}\nEOF\n\n#start and enable docker.service\nsystemctl daemon-reload\nsystemctl start docker && systemctl enable docker\nsleep 5\n#check status\nsystemctl status docker\n')),(0,a.kt)("h2",{id:"install-on-ubuntu"},"Install on Ubuntu"),(0,a.kt)("p",null,"Some small projects and new machines are ubuntu linux."),(0,a.kt)("h3",{id:"install-with-apt-get"},"Install with ",(0,a.kt)("inlineCode",{parentName:"h3"},"apt-get")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt-get update\nsudo apt-get install -y \\\n    apt-transport-https \\\n    ca-certificates \\\n    curl \\\n    gnupg-agent \\\n    software-properties-common\n\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\n\nsudo add-apt-repository \\\n   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n   $(lsb_release -cs) \\\n   stable"\n\nsudo apt-get update\nsudo apt-get install -y docker-ce docker-ce-cli containerd.io\n\nsudo groupadd docker\nsudo gpasswd -a $USER docker\nnewgrp docker\n')),(0,a.kt)("h3",{id:"check-installation"},"Check installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker -v\n")))}d.isMDXComponent=!0}}]);