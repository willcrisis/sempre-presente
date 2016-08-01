"use strict";function convertNumberToDate(a){return new Date(a)}function AppConfig(a){a.globalTimeToLive(5e3),a.globalDisableCountDown(!0)}function AppRun(a,e,t,n,r){a.setRolesSupport(!0),a.setFunctionIfDenied(function(a,e){"app"!==e.name&&t.warning("Você não possui permissão para ver esta página."),n.loggedIn?a.go("app"):a.go("login")}),n.loggedIn&&r.get(n.uid).$loaded().then(function(a){if(a.permissoes){n.roles=[];for(var e in a.permissoes)a.permissoes.hasOwnProperty(e)&&n.roles.push(e)}})}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function routesConfig(a,e,t){t.html5Mode(!0).hashPrefix("!"),e.otherwise("/"),a.state("app",{url:"/",template:"<app></app>",auth:!0}).state("alunos",{url:"/alunos",template:"<alunos></alunos>",auth:["PROFESSOR","ADMIN"]}).state("professores",{url:"/professores",template:"<professores></professores>",auth:["ADMIN"]}).state("aluno",{url:"/aluno/:id",controller:AlunoRoute,controllerAs:"ctrl",template:'<aluno id="ctrl.id"></aluno>',auth:["PROFESSOR","ADMIN"]}).state("professor",{url:"/professor",template:"<professor></professor>",auth:["ADMIN"]}).state("aulas",{url:"/aulas",template:"<aulas></aulas>",auth:["PROFESSOR","ADMIN"]}).state("aula",{url:"/aula/:id",controller:AulaRoute,controllerAs:"ctrl",template:'<aula id="ctrl.id"></aula>',auth:["PROFESSOR","ADMIN"]}).state("aulaConsulta",{url:"/aula/consulta/:id",controller:AulaRoute,controllerAs:"ctrl",template:'<aula-consulta id="ctrl.id"></aula-consulta>',auth:["PROFESSOR","ADMIN"]}).state("login",{url:"/login",template:"<login></login>",auth:!1})}AppConfig.$inject=["growlProvider"],AppRun.$inject=["authConf","$state","growl","auth","usuarioService"],routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],angular.module("app",["ui.router","willcrisis.angular-auth","firebase","angular-growl"]).config(AppConfig).run(AppRun);var _createClass=function(){function a(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}(),Aluno=function(){function a(e,t){_classCallCheck(this,a),this.stateService=e,this.alunoService=t,this.aluno=this.id?this.alunoService.get(this.id):{}}return a.$inject=["$state","alunoService"],_createClass(a,[{key:"save",value:function(a){a.$id?this.alunoService.edit(a):this.alunoService.add(a),this.stateService.go("alunos")}}]),a}();angular.module("app").component("aluno",{templateUrl:"app/containers/Aluno.html",controller:Aluno,bindings:{id:"<"}});var Alunos=["alunoService",function a(e){_classCallCheck(this,a),this.alunoService=e}];Alunos.$inject=["alunoService"],angular.module("app").component("alunos",{templateUrl:"app/containers/Alunos.html",controller:Alunos});var App=function e(){_classCallCheck(this,e)};angular.module("app").component("app",{templateUrl:"app/containers/App.html",controller:App});var _createClass=function(){function a(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}(),Aula=function(){function a(e,t,n,r){_classCallCheck(this,a),this.stateService=e,this.aulaService=t,this.professores=n.list(),this.alunos=r.list(),this.aula=this.id?this.aulaService.get(this.id):{data:new Date,professores:{},alunos:{}}}return a.$inject=["$state","aulaService","professorService","alunoService"],_createClass(a,[{key:"save",value:function(a){var e=this;a.$id?(this.aulaService.edit(a),this.stateService.go("aulaConsulta",{id:a.$id})):this.aulaService.add(a).then(function(a){e.stateService.go("aulaConsulta",{id:a.$id})})}},{key:"toggle",value:function(a){void 0===this.aula.professores[a]?this.aula.professores[a]=!0:delete this.aula.professores[a]}},{key:"toggleAluno",value:function(a){void 0===this.aula.alunos[a]?this.aula.alunos[a]=2:delete this.aula.alunos[a]}},{key:"remove",value:function(a){var e=this.aula.professores.find(function(e){return e.$id===a});this.professores.push(e)}}]),a}();angular.module("app").component("aula",{templateUrl:"app/containers/Aula.html",controller:Aula,bindings:{id:"<"}});var AulaConsulta=["$state","aulaService","usuarioService","alunoService",function t(a,e,n,r){var l=this;if(_classCallCheck(this,t),!this.id)throw new Error("AulaConsulta: O id é obrigatório");this.stateService=a,this.aulaService=e,this.aula=this.aulaService.get(this.id),this.alunos=[],this.professores=[];for(var s in this.aula.professores)this.aula.professores.hasOwnProperty(s)&&n.get(s).$loaded().then(function(a){l.professores.push(a)});for(var o in this.aula.alunos)if(this.aula.alunos.hasOwnProperty(o)){var i=r.get(o);this.alunos.push({$id:o,nome:i.nome,moedas:this.aula.alunos[o]})}}];AulaConsulta.$inject=["$state","aulaService","usuarioService","alunoService"],angular.module("app").component("aulaConsulta",{templateUrl:"app/containers/AulaConsulta.html",controller:AulaConsulta,bindings:{id:"<"}});var Aulas=["aulaService",function n(a){_classCallCheck(this,n),this.aulaService=a}];Aulas.$inject=["aulaService"],angular.module("app").component("aulas",{templateUrl:"app/containers/Aulas.html",controller:Aulas});var _createClass=function(){function a(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}(),Login=function(){function a(e,t,n){_classCallCheck(this,a),this.authService=e,this.stateService=t,this.usuarioService=n}return a.$inject=["auth","$state","usuarioService"],_createClass(a,[{key:"login",value:function(a,e){var t=this;this.authService.loginWithEmailPassword(a,e).then(function(){t.stateService.go("app")})}},{key:"loginComGoogle",value:function(){var a=this;this.authService.loginWithGoogle().then(function(e){a.salvarUsuario(e),a.stateService.go("app")})}},{key:"loginComFacebook",value:function(){var a=this;this.authService.loginWithFacebook().then(function(e){a.salvarUsuario(e),a.stateService.go("app")})}},{key:"salvarUsuario",value:function(a){this.usuarioService.get(a.uid).$loaded().then(function(e){if(e.nome=a.displayName,e.email=a.email,e.foto=a.photoURL||"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Mi45IDQ4Mi45IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODIuOSA0ODIuOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnPjxwYXRoIGQ9Ik0yMzkuNywyNjAuMmMwLjUsMCwxLDAsMS42LDBjMC4yLDAsMC40LDAsMC42LDBjMC4zLDAsMC43LDAsMSwwYzI5LjMtMC41LDUzLTEwLjgsNzAuNS0zMC41YzM4LjUtNDMuNCwzMi4xLTExNy44LDMxLjQtMTI0LjljLTIuNS01My4zLTI3LjctNzguOC00OC41LTkwLjdDMjgwLjgsNS4yLDI2Mi43LDAuNCwyNDIuNSwwaC0wLjdjLTAuMSwwLTAuMywwLTAuNCwwaC0wLjZjLTExLjEsMC0zMi45LDEuOC01My44LDEzLjdjLTIxLDExLjktNDYuNiwzNy40LTQ5LjEsOTEuMWMtMC43LDcuMS03LjEsODEuNSwzMS40LDEyNC45QzE4Ni43LDI0OS40LDIxMC40LDI1OS43LDIzOS43LDI2MC4yeiBNMTY0LjYsMTA3LjNjMC0wLjMsMC4xLTAuNiwwLjEtMC44YzMuMy03MS43LDU0LjItNzkuNCw3Ni03OS40aDAuNGMwLjIsMCwwLjUsMCwwLjgsMGMyNywwLjYsNzIuOSwxMS42LDc2LDc5LjRjMCwwLjMsMCwwLjYsMC4xLDAuOGMwLjEsMC43LDcuMSw2OC43LTI0LjcsMTA0LjVjLTEyLjYsMTQuMi0yOS40LDIxLjItNTEuNSwyMS40Yy0wLjIsMC0wLjMsMC0wLjUsMGwwLDBjLTAuMiwwLTAuMywwLTAuNSwwYy0yMi0wLjItMzguOS03LjItNTEuNC0yMS40QzE1Ny43LDE3Ni4yLDE2NC41LDEwNy45LDE2NC42LDEwNy4zeiIvPjxwYXRoIGQ9Ik00NDYuOCwzODMuNmMwLTAuMSwwLTAuMiwwLTAuM2MwLTAuOC0wLjEtMS42LTAuMS0yLjVjLTAuNi0xOS44LTEuOS02Ni4xLTQ1LjMtODAuOWMtMC4zLTAuMS0wLjctMC4yLTEtMC4zYy00NS4xLTExLjUtODIuNi0zNy41LTgzLTM3LjhjLTYuMS00LjMtMTQuNS0yLjgtMTguOCwzLjNjLTQuMyw2LjEtMi44LDE0LjUsMy4zLDE4LjhjMS43LDEuMiw0MS41LDI4LjksOTEuMyw0MS43YzIzLjMsOC4zLDI1LjksMzMuMiwyNi42LDU2YzAsMC45LDAsMS43LDAuMSwyLjVjMC4xLDktMC41LDIyLjktMi4xLDMwLjljLTE2LjIsOS4yLTc5LjcsNDEtMTc2LjMsNDFjLTk2LjIsMC0xNjAuMS0zMS45LTE3Ni40LTQxLjFjLTEuNi04LTIuMy0yMS45LTIuMS0zMC45YzAtMC44LDAuMS0xLjYsMC4xLTIuNWMwLjctMjIuOCwzLjMtNDcuNywyNi42LTU2YzQ5LjgtMTIuOCw4OS42LTQwLjYsOTEuMy00MS43YzYuMS00LjMsNy42LTEyLjcsMy4zLTE4LjhjLTQuMy02LjEtMTIuNy03LjYtMTguOC0zLjNjLTAuNCwwLjMtMzcuNywyNi4zLTgzLDM3LjhjLTAuNCwwLjEtMC43LDAuMi0xLDAuM2MtNDMuNCwxNC45LTQ0LjcsNjEuMi00NS4zLDgwLjljMCwwLjksMCwxLjctMC4xLDIuNWMwLDAuMSwwLDAuMiwwLDAuM2MtMC4xLDUuMi0wLjIsMzEuOSw1LjEsNDUuM2MxLDIuNiwyLjgsNC44LDUuMiw2LjNjMywyLDc0LjksNDcuOCwxOTUuMiw0Ny44czE5Mi4yLTQ1LjksMTk1LjItNDcuOGMyLjMtMS41LDQuMi0zLjcsNS4yLTYuM0M0NDcsNDE1LjUsNDQ2LjksMzg4LjgsNDQ2LjgsMzgzLjZ6Ii8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=",e.permissoes){a.roles=[];for(var t in e.permissoes)e.permissoes.hasOwnProperty(t)&&a.roles.push(t)}e.$save()})}}]),a}();angular.module("app").component("login",{templateUrl:"app/containers/Login.html",controller:Login});var _createClass=function(){function a(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}(),Professor=function(){function a(e,t){var n=this;_classCallCheck(this,a),this.stateService=e,this.professorService=t,t.listNotProfessores().then(function(a){n.usuarios=a})}return a.$inject=["$state","professorService"],_createClass(a,[{key:"save",value:function(a){this.professorService.add(a),this.stateService.go("professores")}}]),a}();angular.module("app").component("professor",{templateUrl:"app/containers/Professor.html",controller:Professor});var Professores=["professorService",function r(a){_classCallCheck(this,r),this.professores=a.list()}];Professores.$inject=["professorService"],angular.module("app").component("professores",{templateUrl:"app/containers/Professores.html",controller:Professores});var Card=function l(){_classCallCheck(this,l),this.tamanho=this.tamanho||12};angular.module("app").component("card",{templateUrl:"app/components/Card.html",controller:Card,transclude:!0,bindings:{label:"@",state:"@",tamanho:"@"}});var CardUsuario=function s(){_classCallCheck(this,s),this.tamanho=this.tamanho||12};angular.module("app").component("cardUsuario",{templateUrl:"app/components/CardUsuario.html",controller:CardUsuario,bindings:{usuario:"<",tamanho:"@"}});var ImagemUsuario=["auth",function o(a){_classCallCheck(this,o),this.urlImagem=this.usuario?this.usuario.foto:a.photoURL,this.tamanho=this.tamanho||20}];ImagemUsuario.$inject=["auth"],angular.module("app").component("imagemUsuario",{templateUrl:"app/components/ImagemUsuario.html",controller:ImagemUsuario,bindings:{tamanho:"<",usuario:"<"}});var LabeledInput=function i(){_classCallCheck(this,i),this.type=this.type||"text"};angular.module("app").component("labeledInput",{templateUrl:"app/components/LabeledInput.html",controller:LabeledInput,bindings:{label:"@",name:"@",type:"@",ngModel:"=",ngRequired:"=?",ngReadonly:"=?",ngDisabled:"=?"}});var LabeledTextarea=function u(){_classCallCheck(this,u)};angular.module("app").component("labeledTextarea",{templateUrl:"app/components/LabeledTextarea.html",controller:LabeledTextarea,bindings:{label:"@",name:"@",ngModel:"=",ngRequired:"=?",ngReadonly:"=?",ngDisabled:"=?"}});var _createClass=function(){function a(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}(),Menu=function(){function a(e,t){_classCallCheck(this,a),this.authService=e,this.stateService=t}return a.$inject=["auth","$state"],_createClass(a,[{key:"logout",value:function(){var a=this;this.authService.logout().then(function(){a.stateService.go("login")})}}]),a}();angular.module("app").component("menu",{templateUrl:"app/components/Menu.html",controller:Menu});var MenuItem=function c(){_classCallCheck(this,c)};angular.module("app").component("menuItem",{templateUrl:"app/components/MenuItem.html",controller:MenuItem,bindings:{label:"@",state:"&"}});var _createClass=function(){function a(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}(),AlunoService=function(){function a(e,t){_classCallCheck(this,a),this.alunos=e(t.alunos.orderByChild("ativo"))}return a.$inject=["$firebaseArray","dataService"],_createClass(a,[{key:"list",value:function(){return this.alunos}},{key:"get",value:function(a){var e=this.alunos.$getRecord(a);return e&&(e.dataNascimento=convertNumberToDate(e.dataNascimento)),e}},{key:"add",value:function(a){return a.dataNascimento=a.dataNascimento.getTime(),this.alunos.$add(a),this.list()}},{key:"edit",value:function(a){return a.dataNascimento=a.dataNascimento.getTime(),this.alunos.$save(a),this.list()}},{key:"remove",value:function(a){return this.alunos.$remove(a),this.list()}}]),a}();angular.module("app").service("alunoService",AlunoService);var _createClass=function(){function a(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}(),AulaService=function(){function a(e,t,n){_classCallCheck(this,a),this.aulas=e(t.aulas),this.firebaseObjectService=n}return a.$inject=["$firebaseArray","dataService","$firebaseObject"],_createClass(a,[{key:"list",value:function(){return this.aulas}},{key:"get",value:function(a){var e=this.aulas.$getRecord(a);return e&&(e.data=convertNumberToDate(e.data)),e}},{key:"add",value:function(a){var e=this;return a.data=a.data.getTime(),this.aulas.$add(a).then(function(a){return e.firebaseObjectService(a).$loaded().then(function(a){return a.data=convertNumberToDate(a.data),a})})}},{key:"edit",value:function(a){return a.data=a.data.getTime(),this.aulas.$save(a),this.list()}}]),a}();angular.module("app").service("aulaService",AulaService);var DataService=function p(){_classCallCheck(this,p),this.root=firebase.database().ref(),this.professores=this.root.child("professores"),this.alunos=this.root.child("alunos"),this.usuarios=this.root.child("usuarios"),this.aulas=this.root.child("aulas")};angular.module("app").service("dataService",DataService);var _createClass=function(){function a(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}(),ProfessorService=function(){function a(e,t,n,r){_classCallCheck(this,a),this.dataService=t;var l=new firebase.util.NormalizedCollection(t.professores,t.usuarios);l.select("usuarios.nome","usuarios.foto","usuarios.email",{key:"professores.$value",alias:"ativo"}),this.professores=e(l.ref()),this.firebaseObjectService=n,this.usuarios=r.list(),this.usuarioService=r}return a.$inject=["$firebaseArray","dataService","$firebaseObject","usuarioService"],_createClass(a,[{key:"get",value:function(a){return this.firebaseObjectService(this.dataService.professores.child(a))}},{key:"list",value:function(){return this.professores}},{key:"listNotProfessores",value:function(){var a=this;return this.professores.$loaded().then(function(e){return a.usuarios.$loaded().then(function(a){var t=[];return a.forEach(function(a){var n=e.find(function(e){return a.$id===e.$id});n||t.push(a)}),t})})}},{key:"add",value:function(a){var e=this.get(a);return e.$value=!0,e.$save(),this.usuarioService.get(a).$loaded().then(function(a){a.permissoes||(a.permissoes={}),a.permissoes.PROFESSOR=!0,a.$save()}),this.list()}},{key:"remove",value:function(a){var e=this.get(a);return e.$remove(),this.list()}}]),a}();angular.module("app").service("professorService",ProfessorService);var _createClass=function(){function a(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}(),UsuarioService=function(){function a(e,t,n,r){_classCallCheck(this,a),this.usuarios=e(r.usuarios),this.firebaseObjectService=t,this.authService=n,this.dataService=r}return a.$inject=["$firebaseArray","$firebaseObject","auth","dataService"],_createClass(a,[{key:"list",value:function(){return this.usuarios}},{key:"get",value:function(a){return a||(a=this.authService.uid),this.firebaseObjectService(this.dataService.usuarios.child(a))}},{key:"add",value:function(a){return this.usuarios.$add(a),this.list()}},{key:"edit",value:function(a){return this.usuarios.$save(a),this.list()}},{key:"remove",value:function(a){return this.usuarios.$remove(a),this.list()}}]),a}();angular.module("app").service("usuarioService",UsuarioService);var AlunoRoute=["$stateParams",function d(a){_classCallCheck(this,d),this.id=a.id}];AlunoRoute.$inject=["$stateParams"];var AulaRoute=["$stateParams",function f(a){_classCallCheck(this,f),this.id=a.id}];AulaRoute.$inject=["$stateParams"];var AulaConsultaRoute=["$stateParams",function h(a){_classCallCheck(this,h),this.id=a.id}];angular.module("app").config(routesConfig),angular.module("app").run(["$templateCache",function(a){a.put("app/components/Card.html",'<div class="panel panel-default col-sm-{{$ctrl.tamanho}}">\r\n  <div class="panel-body" ng-transclude="">\r\n  </div>\r\n</div>\r\n'),a.put("app/components/CardUsuario.html",'<card tamanho="{{$ctrl.tamanho}}">\r\n  <div class="media">\r\n    <div class="media-left">\r\n      <a href="javascript:void(0)">\r\n        <img ng-src="{{$ctrl.usuario.foto}}" style="width: 70px" class="img-circle">\r\n      </a>\r\n    </div>\r\n    <div class="media-body">\r\n      <h4 class="media-heading">{{$ctrl.usuario.nome}}</h4>\r\n      {{$ctrl.usuario.email}}\r\n    </div>\r\n  </div>\r\n</card>\r\n'),a.put("app/components/ImagemUsuario.html",'<img ng-src="{{$ctrl.urlImagem}}" class="img-circle" style="width: {{$ctrl.tamanho}}px">'),a.put("app/components/LabeledInput.html",'<div class="form-group">\r\n  <label class="control-label">{{$ctrl.label}}</label>\r\n  <input class="form-control" type="{{$ctrl.type}}" name="{{$ctrl.name}}" ng-model="$ctrl.ngModel" ng-required="$ctrl.ngRequired" ng-readonly="$ctrl.ngReadonly" ng-disabled="$ctrl.ngDisabled">\r\n</div>'),a.put("app/components/LabeledTextarea.html",'<div class="form-group">\r\n  <label class="control-label">{{$ctrl.label}}</label>\r\n  <textarea class="form-control" name="{{$ctrl.name}}" ng-model="$ctrl.ngModel" ng-required="$ctrl.ngRequired" ng-readonly="$ctrl.ngReadonly" ng-disabled="$ctrl.ngDisabled"></textarea>\r\n</div>'),a.put("app/components/Menu.html",'<nav class="navbar navbar-inverse navbar-fixed-top">\r\n  <div class="container-fluid">\r\n    <div class="navbar-header">\r\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu-principal" aria-expanded="false" auth-logged-in="">\r\n        <span class="sr-only">Toggle navigation</span>\r\n        <span class="icon-bar"></span>\r\n        <span class="icon-bar"></span>\r\n        <span class="icon-bar"></span>\r\n      </button>\r\n      <a class="navbar-brand" href="javascript:void(0)" ui-sref="app">SemprePresente</a>\r\n    </div>\r\n    <div class="collapse navbar-collapse" id="menu-principal" auth-logged-in="">\r\n      <ul class="nav navbar-nav">\r\n        <li><a href="javascript:void(0)" ui-sref="app" data-toggle="collapse" data-target="#menu-principal.in">Início</a></li>\r\n        <li><a href="javascript:void(0)" ui-sref="aulas" data-toggle="collapse" data-target="#menu-principal.in">Aulas</a></li>\r\n        <li><a href="javascript:void(0)" ui-sref="alunos" data-toggle="collapse" data-target="#menu-principal.in">Alunos</a></li>\r\n        <li><a href="javascript:void(0)" ui-sref="professores" data-toggle="collapse" data-target="#menu-principal.in">Professores</a></li>\r\n      </ul>\r\n      <ul class="nav navbar-nav navbar-right">\r\n        <li class="dropdown">\r\n          <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><imagem-usuario></imagem-usuario> <auth-display-name></auth-display-name><span class="caret"></span></a>\r\n          <ul class="dropdown-menu">\r\n            <li><a href="javascript:void(0)" ng-click="$ctrl.logout()">Logout</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n'),a.put("app/components/MenuItem.html",'<a href="javascript:void(0)" ui-sref="{{$ctrl.state}}">{{$ctrl.label}}</a>'),a.put("app/containers/Aluno.html",'<form name="alunoForm" ng-submit="alunoForm.$valid && $ctrl.save($ctrl.aluno)">\r\n  <labeled-input label="Nome" name="nome" ng-model="$ctrl.aluno.nome" ng-required="true"></labeled-input>\r\n  <labeled-input label="Data de Nascimento" name="dataNascimento" ng-model="$ctrl.aluno.dataNascimento" ng-required="true" type="date"></labeled-input>\r\n  <labeled-input label="Telefone" name="telefone" ng-model="$ctrl.aluno.telefone"></labeled-input>\r\n  <labeled-input label="Nome do Pai" name="pai" ng-model="$ctrl.aluno.pai"></labeled-input>\r\n  <labeled-input label="Nome da Mãe" name="mae" ng-model="$ctrl.aluno.mae"></labeled-input>\r\n  <labeled-input label="Telefone do Responsável" name="telefoneResponsavel" ng-model="$ctrl.aluno.telefoneResponsavel"></labeled-input>\r\n  <labeled-input label="Ativo" name="ativo" ng-model="$ctrl.aluno.ativo" type="checkbox"></labeled-input>\r\n\r\n  <div class="action-buttons">\r\n    <button type="button" class="btn btn-default" ui-sref="alunos">Cancelar</button>\r\n    <button class="btn btn-primary" type="submit">Salvar</button>\r\n  </div>\r\n</form>\r\n'),a.put("app/containers/Alunos.html",'<p>\r\n  <a href="javascript:void(0)" ui-sref="aluno" class="btn btn-default">Novo Aluno</a>\r\n</p>\r\n<card tamanho="12" ng-repeat="item in $ctrl.alunoService.list()" ui-sref="aluno({id:item.$id})">\r\n  {{item.nome}}\r\n</card>\r\n'),a.put("app/containers/App.html",'<auth-has-any-role roles="PROFESSOR,ADMIN">\r\n  <card ui-sref="aluno">Novo Aluno</card>\r\n</auth-has-any-role>\r\n<auth-has-any-role roles="PROFESSOR,ADMIN">\r\n  <card ui-sref="aula">Nova Aula</card>\r\n</auth-has-any-role>\r\n<auth-has-any-role roles="PROFESSOR,ADMIN">\r\n  <card ui-sref="aulas">Aulas</card>\r\n</auth-has-any-role>\r\n<auth-has-any-role roles="PROFESSOR,ADMIN">\r\n  <card ui-sref="alunos">Alunos</card>\r\n</auth-has-any-role>\r\n\r\n<auth-has-role role="ADMIN">\r\n  <card ui-sref="professores">Professores</card>\r\n</auth-has-role>\r\n<auth-has-role role="ADMIN">\r\n  <card ui-sref="professor">Novo Professor</card>\r\n</auth-has-role>\r\n\r\n'),a.put("app/containers/Aula.html",'<form name="aulaForm" ng-submit="aulaForm.$valid && $ctrl.save($ctrl.aula)">\r\n  <labeled-input label="Data" name="data" ng-model="$ctrl.aula.data" ng-required="true" type="date"></labeled-input>\r\n\r\n  <div class="form-group">\r\n    <label class="control-label">Professores</label>\r\n    <div class="list-group">\r\n      <li class="list-group-item" ng-repeat="item in $ctrl.professores | filter:{ativo:true}" ng-class="{\'active\': $ctrl.aula.professores[item.$id] !== undefined}" ng-click="$ctrl.toggle(item.$id)">\r\n        <imagem-usuario usuario="item"></imagem-usuario>\r\n        {{item.nome}}\r\n      </li>\r\n    </div>\r\n  </div>\r\n\r\n  <label class="control-label">Alunos</label>\r\n  <div class="form-group" ng-repeat="item in $ctrl.alunos | filter:{ativo: true}">\r\n    <div class="input-group">\r\n      <span class="input-group-btn" style="width: 70%">\r\n        <button class="btn btn-default" style="width: 100%" type="button" ng-class="{\'active\': $ctrl.aula.alunos[item.$id] !== undefined}" ng-click="$ctrl.toggleAluno(item.$id)">\r\n          {{item.nome}}\r\n        </button>\r\n      </span>\r\n      <input type="number" class="form-control" placeholder="Moedas..." name="moedas-{{item.$id}}" ng-required="$ctrl.aula.alunos[item.$id] !== undefined" min="1" ng-disabled="$ctrl.aula.alunos[item.$id] === undefined" ng-model="$ctrl.aula.alunos[item.$id]">\r\n    </div>\r\n  </div>\r\n\r\n  <labeled-input label="Lição" name="licao" ng-model="$ctrl.aula.licao" ng-required="true"></labeled-input>\r\n  <labeled-textarea label="Observações" name="observacoes" ng-model="$ctrl.aula.observacoes"></labeled-textarea>\r\n\r\n  <div class="action-buttons">\r\n    <button type="button" class="btn btn-default" ui-sref="aulas">Cancelar</button>\r\n    <button class="btn btn-primary" type="submit">Salvar</button>\r\n  </div>\r\n</form>\r\n'),a.put("app/containers/AulaConsulta.html",'<form name="aulaForm">\r\n  <labeled-input label="Data" name="data" ng-model="$ctrl.aula.data" ng-readonly="true" type="date"></labeled-input>\r\n\r\n  <div class="form-group">\r\n    <label class="control-label">Professores</label>\r\n    <div class="list-group">\r\n      <li class="list-group-item active" ng-repeat="item in $ctrl.professores">\r\n        <imagem-usuario usuario="item"></imagem-usuario>\r\n        {{item.nome}}\r\n      </li>\r\n    </div>\r\n  </div>\r\n\r\n  <label class="control-label">Alunos</label>\r\n  <div class="form-group" ng-repeat="item in $ctrl.alunos">\r\n    <div class="input-group">\r\n      <span class="input-group-btn" style="width: 70%">\r\n        <button class="btn btn-default" style="width: 100%" type="button">\r\n          {{item.nome}}\r\n        </button>\r\n      </span>\r\n      <input type="number" class="form-control" placeholder="Moedas..." name="moedas-{{item.$id}}" ng-readonly="true" ng-model="item.moedas">\r\n    </div>\r\n  </div>\r\n\r\n  <labeled-input label="Lição" name="licao" ng-model="$ctrl.aula.licao" ng-readonly="true"></labeled-input>\r\n  <labeled-textarea label="Observações" name="observacoes" ng-model="$ctrl.aula.observacoes" ng-readonly="true"></labeled-textarea>\r\n\r\n  <div class="action-buttons">\r\n    <button type="button" class="btn btn-default" ui-sref="aulas">Cancelar</button>\r\n    <button class="btn btn-default" type="button" ui-sref="aula({id: $ctrl.aula.$id})">Editar</button>\r\n  </div>\r\n</form>\r\n'),a.put("app/containers/Aulas.html",'<p>\r\n  <a href="javascript:void(0)" ui-sref="aula" class="btn btn-default">Nova Aula</a>\r\n</p>\r\n<card ng-repeat="item in $ctrl.aulaService.list()" ui-sref="aulaConsulta({id: item.$id})">\r\n  {{item.data | date:\'dd/MM/yyyy - EEEE\'}}\r\n</card>\r\n'),a.put("app/containers/Login.html",'<div class="container" style="margin-top:30px">\r\n  <form name="loginForm" role="form" ng-submit="loginForm.$valid && $ctrl.login($ctrl.email, $ctrl.senha)">\r\n    <p>\r\n      <button type="button" class="btn btn-sm btn-danger" ng-click="$ctrl.loginComGoogle()" style="width: 100%"><i class="fa fa-google"></i> Login com Google\r\n      </button>\r\n    </p>\r\n    <p>\r\n      <button type="button" class="btn btn-sm btn-primary" ng-click="$ctrl.loginComFacebook()" style="width: 100%"><i class="fa fa-facebook"></i> Login com Facebook\r\n      </button>\r\n    </p>\r\n  </form>\r\n</div>'),a.put("app/containers/Professor.html",'<card-usuario ng-repeat="usuario in $ctrl.usuarios" usuario="usuario" ng-click="$ctrl.save(usuario.$id)"></card-usuario>\r\n'),a.put("app/containers/Professores.html",'<card ui-sref="professor">\r\n  <div class="media">\r\n    <div class="media-left">\r\n      <i class="fa fa-plus fa-5x media-object"></i>\r\n    </div>\r\n    <div class="media-body">\r\n      <h4 class="media-heading">Novo Professor</h4>\r\n    </div>\r\n  </div>\r\n</card>\r\n\r\n<card-usuario ng-repeat="professor in $ctrl.professores" usuario="professor"></card-usuario>\r\n')}]);
//# sourceMappingURL=../maps/scripts/app.js.map
