"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function convertNumberToDate(e){return new Date(e)}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function showAll(){return!0}function showCompleted(e){return e.completed}function showActive(e){return!e.completed}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function routesConfig(e,t,n){n.html5Mode(!0).hashPrefix("!"),t.otherwise("/"),e.state("app",{url:"/",template:"<app></app>",auth:!0}).state("alunos",{url:"/alunos",template:"<alunos></alunos>",auth:!0}).state("professores",{url:"/professores",template:"<professores></professores>",auth:!0}).state("aluno",{url:"/aluno/:id",controller:AlunoRoute,controllerAs:"ctrl",template:'<aluno id="ctrl.id"></aluno>',auth:!0}).state("professor",{url:"/professor",template:"<professor></professor>",auth:!0}).state("aulas",{url:"/aulas",template:"<aulas></aulas>",auth:!0}).state("login",{url:"/login",template:"<login></login>",auth:!1})}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"];var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),initialTodo={text:"Use AngularJS",completed:!1,id:0},TodoService=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"addTodo",value:function(e,t){return t.$add({completed:!1,text:e}),t}},{key:"completeTodo",value:function(e,t){var n=t.find(function(t){return t.$id===e});return n.completed=!n.completed,t.$save(n),t}},{key:"deleteTodo",value:function(e,t){return t.$remove(t.find(function(t){return t.$id===e})),t}},{key:"editTodo",value:function(e,t,n){var a=n.$getRecord(e);return a.text=t,n.$save(a),n}},{key:"completeAll",value:function(e){var t=e.every(function(e){return e.completed});return e.forEach(function(n){n.completed=!t,e.$save(n)}),e}},{key:"clearCompleted",value:function(e){var t=e.filter(function(e){return e.completed===!0});return t.forEach(function(t){e.$remove(t)}),e}}]),e}();angular.module("app",["ui.router","willcrisis.angular-auth","firebase"]);var SHOW_ALL="show_all",SHOW_COMPLETED="show_completed",SHOW_ACTIVE="show_active",_visibilityFilters,visibilityFilters=(_visibilityFilters={},_defineProperty(_visibilityFilters,SHOW_ALL,{filter:showAll,type:SHOW_ALL}),_defineProperty(_visibilityFilters,SHOW_COMPLETED,{filter:showCompleted,type:SHOW_COMPLETED}),_defineProperty(_visibilityFilters,SHOW_ACTIVE,{filter:showActive,type:SHOW_ACTIVE}),_visibilityFilters),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Aluno=function(){function e(t,n){_classCallCheck(this,e),this.stateService=t,this.alunoService=n,this.aluno=this.id?this.alunoService.getAluno(this.id):{}}return e.$inject=["$state","alunoService"],_createClass(e,[{key:"save",value:function(e){e.$id?this.alunoService.editAluno(e):this.alunoService.addAluno(e),this.stateService.go("alunos")}}]),e}();angular.module("app").component("aluno",{templateUrl:"app/containers/Aluno.html",controller:Aluno,bindings:{id:"<"}});var Alunos=["alunoService",function e(t){_classCallCheck(this,e),this.alunoService=t}];Alunos.$inject=["alunoService"],angular.module("app").component("alunos",{templateUrl:"app/containers/Alunos.html",controller:Alunos});var App=["$firebaseArray",function t(e){_classCallCheck(this,t);var n=firebase.database().ref().child("todos");this.todos=e(n),this.filter=SHOW_ALL}];App.$inject=["$firebaseArray"],angular.module("app").component("app",{templateUrl:"app/containers/App.html",controller:App});var Aulas=["aulaService",function n(e){_classCallCheck(this,n),this.aulaService=e}];Aulas.$inject=["aulaService"],angular.module("app").component("aulas",{templateUrl:"app/containers/Aulas.html",controller:Aulas});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Login=function(){function e(t,n,a){_classCallCheck(this,e),this.authService=t,this.stateService=n,this.usuarioService=a}return e.$inject=["auth","$state","usuarioService"],_createClass(e,[{key:"login",value:function(e,t){var n=this;this.authService.loginWithEmailPassword(e,t).then(function(){n.stateService.go("app")})}},{key:"loginComGoogle",value:function(){var e=this;this.authService.loginWithGoogle().then(function(t){var n=e.usuarioService.get(t.uid);n.nome=t.displayName,n.email=t.email,n.foto=t.photoURL,n.$save(),e.stateService.go("app")})}}]),e}();angular.module("app").component("login",{templateUrl:"app/containers/Login.html",controller:Login});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Professor=function(){function e(t,n,a){var o=this;_classCallCheck(this,e),this.stateService=t,this.professorService=n,this.usuarios=[],a.list().$loaded().then(function(e){o.professorService.list().$loaded().then(function(t){e.forEach(function(e){t.map(function(e){return e.$value}).indexOf(e.$id)==-1&&o.usuarios.push(e)})})})}return e.$inject=["$state","professorService","usuarioService"],_createClass(e,[{key:"save",value:function(e){this.professorService.add(e),this.stateService.go("professores")}}]),e}();angular.module("app").component("professor",{templateUrl:"app/containers/Professor.html",controller:Professor});var Professores=["professorService","usuarioService",function a(e,t){var n=this;_classCallCheck(this,a),this.professorService=e,this.professores=[],this.professorService.list().$loaded().then(function(e){e.forEach(function(e){n.professores.push(t.get(e.$value))})})}];Professores.$inject=["professorService","usuarioService"],angular.module("app").component("professores",{templateUrl:"app/containers/Professores.html",controller:Professores});var Card=function o(){_classCallCheck(this,o),this.tamanho=this.tamanho||3};angular.module("app").component("card",{templateUrl:"app/components/Card.html",controller:Card,transclude:!0,bindings:{label:"@",state:"@",tamanho:"@"}});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Footer=function(){function e(){var t;_classCallCheck(this,e),this.filters=[SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED],this.filterTitles=(t={},_defineProperty(t,SHOW_ALL,"All"),_defineProperty(t,SHOW_ACTIVE,"Active"),_defineProperty(t,SHOW_COMPLETED,"Completed"),t)}return _createClass(e,[{key:"handleClear",value:function(){this.onClearCompleted()}},{key:"handleChange",value:function(e){this.onShow({filter:e})}}]),e}();angular.module("app").component("footerComponent",{templateUrl:"app/components/Footer.html",controller:Footer,bindings:{completedCount:"<",activeCount:"<",selectedFilter:"<filter",onClearCompleted:"&",onShow:"&"}});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Header=function(){function e(t,n){_classCallCheck(this,e),this.todoService=t,this.auth=n}return e.$inject=["todoService","auth"],_createClass(e,[{key:"handleSave",value:function(e){0!==e.length&&(this.todos=this.todoService.addTodo(e,this.todos))}},{key:"loginComGoogle",value:function(){this.auth.loginWithGoogle()}},{key:"logout",value:function(){this.auth.logout()}}]),e}();angular.module("app").component("headerComponent",{templateUrl:"app/components/Header.html",controller:Header,bindings:{todos:"="}});var LabeledInput=function r(){_classCallCheck(this,r),this.type=this.type||"text"};angular.module("app").component("labeledInput",{templateUrl:"app/components/LabeledInput.html",controller:LabeledInput,bindings:{label:"@",name:"@",type:"@",ngModel:"=",ngRequired:"=?",ngReadonly:"=?",ngDisabled:"=?"}});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),MainSection=function(){function e(t){_classCallCheck(this,e),this.todoService=t,this.selectedFilter=visibilityFilters[this.filter],this.completeReducer=function(e,t){return t.completed?e+1:e}}return e.$inject=["todoService"],_createClass(e,[{key:"handleClearCompleted",value:function(){this.todos=this.todoService.clearCompleted(this.todos)}},{key:"handleCompleteAll",value:function(){this.todos=this.todoService.completeAll(this.todos)}},{key:"handleShow",value:function(e){this.filter=e,this.selectedFilter=visibilityFilters[e]}},{key:"handleChange",value:function(e){this.todos=this.todoService.completeTodo(e,this.todos)}},{key:"handleSave",value:function(e){console.log(e),0===e.text.length?this.todos=this.todoService.deleteTodo(e.$id,this.todos):this.todos=this.todoService.editTodo(e.$id,e.text,this.todos)}},{key:"handleDestroy",value:function(e){this.todos=this.todoService.deleteTodo(e,this.todos)}}]),e}();angular.module("app").component("mainSection",{templateUrl:"app/components/MainSection.html",controller:MainSection,bindings:{todos:"=",filter:"<"}});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Menu=function(){function e(t,n){_classCallCheck(this,e),this.authService=t,this.stateService=n}return e.$inject=["auth","$state"],_createClass(e,[{key:"logout",value:function(){var e=this;this.authService.logout().then(function(){e.stateService.go("login")})}}]),e}();angular.module("app").component("menu",{templateUrl:"app/components/Menu.html",controller:Menu});var MenuItem=function l(){_classCallCheck(this,l)};angular.module("app").component("menuItem",{templateUrl:"app/components/MenuItem.html",controller:MenuItem,bindings:{label:"@",state:"&"}});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),TodoItem=function(){function e(){_classCallCheck(this,e),this.editing=!1}return _createClass(e,[{key:"handleDoubleClick",value:function(){this.editing=!0}},{key:"handleSave",value:function(e){this.onSave({todo:{text:e,$id:this.todo.$id}}),this.editing=!1}},{key:"handleDestroy",value:function(e){this.onDestroy({id:e})}}]),e}();angular.module("app").component("todoItem",{templateUrl:"app/components/TodoItem.html",controller:TodoItem,bindings:{todo:"<",onDestroy:"&",onChange:"&",onSave:"&"}});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),TodoTextInput=function(){function e(t,n,a){_classCallCheck(this,e),this.$timeout=a,this.$window=n,this.todoService=t,this.editing=this.editing||!1,this.text=this.text||"",this.text.length&&this.focus()}return e.$inject=["todoService","$window","$timeout"],_createClass(e,[{key:"handleBlur",value:function(){this.newTodo||this.onSave({text:this.text})}},{key:"handleSubmit",value:function(e){13===e.keyCode&&(this.onSave({text:this.text}),this.newTodo&&(this.text=""))}},{key:"focus",value:function(){var e=this;this.$timeout(function(){var t=e.$window.document.querySelector(".editing .textInput");t&&t.focus()},0)}}]),e}();angular.module("app").component("todoTextInput",{templateUrl:"app/components/TodoTextInput.html",controller:TodoTextInput,bindings:{onSave:"&",placeholder:"@",newTodo:"@",editing:"@",text:"<"}}),angular.module("app").config(routesConfig);var AlunoRoute=["$stateParams",function i(e){_classCallCheck(this,i),this.id=e.id}];AlunoRoute.$inject=["$stateParams"],angular.module("app").run(["$templateCache",function(e){e.put("app/components/Card.html",'<div class="panel panel-default col-sm-{{$ctrl.tamanho}}" ui-sref="{{$ctrl.state}}">\n  <div class="panel-body" ng-transclude="">\n  </div>\n</div>\n'),e.put("app/components/LabeledInput.html",'<div class="form-group">\r\n  <label class="control-label">{{$ctrl.label}}</label>\r\n  <input class="form-control" type="{{$ctrl.type}}" name="{{$ctrl.name}}" ng-model="$ctrl.ngModel" ng-required="$ctrl.ngRequired" ng-readonly="$ctrl.ngReadonly" ng-disabled="$ctrl.ngDisabled">\r\n</div>'),e.put("app/components/Menu.html",'<nav class="navbar navbar-inverse navbar-fixed-top">\n  <div class="container-fluid">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="javascript:void(0)" ui-sref="app">SemprePresente</a>\n    </div>\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" auth-logged-in="">\n      <ul class="nav navbar-nav">\n        <li><a href="javascript:void(0)" ui-sref="app">Início</a></li>\n        <li><a href="javascript:void(0)" ui-sref="aulas">Aulas</a></li>\n        <li><a href="javascript:void(0)" ui-sref="alunos">Alunos</a></li>\n        <li><a href="javascript:void(0)" ui-sref="professores">Professores</a></li>\n      </ul>\n      <ul class="nav navbar-nav navbar-right">\n        <li class="dropdown">\n          <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img ng-src="{{$ctrl.authService.photoURL}}" class="img-circle" style="width: 20px"> <auth-display-name></auth-display-name><span class="caret"></span></a>\n          <ul class="dropdown-menu">\n            <li><a href="javascript:void(0)" ng-click="$ctrl.logout()">Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n'),e.put("app/components/MenuItem.html",'<a href="javascript:void(0)" ui-sref="{{$ctrl.state}}">{{$ctrl.label}}</a>'),e.put("app/containers/Aluno.html",'<form name="alunoForm" ng-submit="alunoForm.$valid && $ctrl.save($ctrl.aluno)">\r\n  <labeled-input label="Nome" name="nome" ng-model="$ctrl.aluno.nome" ng-required="true"></labeled-input>\r\n  <labeled-input label="Data de Nascimento" name="dataNascimento" ng-model="$ctrl.aluno.dataNascimento" ng-required="true" type="date"></labeled-input>\r\n  <labeled-input label="Telefone" name="telefone" ng-model="$ctrl.aluno.telefone"></labeled-input>\r\n  <labeled-input label="Nome do Pai" name="pai" ng-model="$ctrl.aluno.pai"></labeled-input>\r\n  <labeled-input label="Nome da Mãe" name="mae" ng-model="$ctrl.aluno.mae"></labeled-input>\r\n  <labeled-input label="Telefone do Responsável" name="telefoneResponsavel" ng-model="$ctrl.aluno.telefoneResponsavel"></labeled-input>\r\n\r\n  <div class="action-buttons">\r\n    <button class="btn btn-primary" type="submit">Salvar</button>\r\n  </div>\r\n</form>'),e.put("app/containers/Alunos.html",'<a href="javascript:void(0)" ui-sref="aluno" class="btn btn-default">Novo Aluno</a>\r\n<table class="table table-striped table-hover">\r\n  <thead>\r\n    <tr>\r\n      <th>Nome</th>\r\n      <th>Data de Nascimento</th>\r\n      <th>Telefone</th>\r\n      <th>Nome do Pai</th>\r\n      <th>Nome da Mãe</th>\r\n      <th>Telefone do Responsável</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr ng-repeat="item in $ctrl.alunoService.listAlunos()">\r\n      <td ui-sref="aluno({id:item.$id})">{{item.nome}}</td>\r\n      <td ui-sref="aluno({id:item.$id})">{{item.dataNascimento | date}}</td>\r\n      <td ui-sref="aluno({id:item.$id})">{{item.telefone}}</td>\r\n      <td ui-sref="aluno({id:item.$id})">{{item.pai}}</td>\r\n      <td ui-sref="aluno({id:item.$id})">{{item.mae}}</td>\r\n      <td ui-sref="aluno({id:item.$id})">{{item.telefoneResponsavel}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n'),e.put("app/containers/App.html",'<card state="aluno">Novo Aluno</card>\n<card state="aula">Nova Aula</card>\n<card state="aulas">Aulas</card>\n<card state="alunos">Alunos</card>\n<card state="professores">Professores</card>\n<card state="professor">Novo Professor</card>\n'),e.put("app/containers/Aulas.html",'<a href="javascript:void(0)" ui-sref="aula" class="btn btn-default">Nova Aula</a>\n<table class="table table-striped table-hover">\n  <thead>\n    <tr>\n      <th>Data</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="item in $ctrl.aulaService.list()">\n      <td ui-sref="aula({id:item.$id})">{{item.data | date}}</td>\n    </tr>\n  </tbody>\n</table>\n'),e.put("app/containers/Login.html",'<div class="container" style="margin-top:30px">\r\n  <div class="col-md-4 col-md-offset-4">\r\n    <div class="panel panel-default">\r\n      <div class="panel-heading"><h3 class="panel-title"><strong>Login</strong></h3></div>\r\n      <div class="panel-body">\r\n        <form name="loginForm" role="form" ng-submit="loginForm.$valid && $ctrl.login($ctrl.email, $ctrl.senha)">\r\n          <labeled-input label="E-mail" name="email" ng-model="$ctrl.email" ng-required="true"></labeled-input>\r\n          <labeled-input label="Senha" name="senha" ng-model="$ctrl.senha"></labeled-input>\r\n\r\n          <p><button type="submit" class="btn btn-sm btn-default">Entrar</button></p>\r\n          <p><button type="button" class="btn btn-sm btn-danger" ng-click="$ctrl.loginComGoogle()"><i class="fa fa-google"></i> Login com Google</button></p>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>'),e.put("app/containers/Professor.html",'<div class="panel panel-default col-sm-3" ng-repeat="usuario in $ctrl.usuarios" ng-click="$ctrl.save(usuario.$id)">\n  <div class="panel-body">\n    <div class="media">\n      <div class="media-left">\n        <a href="javascript:void(0)">\n          <img ng-src="{{usuario.foto}}" style="width: 64px" class="img-circle">\n        </a>\n      </div>\n      <div class="media-body">\n        <h4 class="media-heading">{{usuario.nome}}</h4>\n        {{usuario.email}}\n      </div>\n    </div>\n  </div>\n</div>\n'),e.put("app/containers/Professores.html",'<card state="professor">\n  <div class="media">\n    <div class="media-left">\n      <i class="fa fa-plus fa-5x media-object"></i>\n    </div>\n    <div class="media-body">\n      <h4 class="media-heading">Novo Professor</h4>\n    </div>\n  </div>\n</card>\n\n<card ng-repeat="professor in $ctrl.professores">\n  <div class="media">\n    <div class="media-left">\n      <a href="javascript:void(0)">\n        <img ng-src="{{professor.foto}}" style="width: 70px" class="img-circle">\n      </a>\n    </div>\n    <div class="media-body">\n      <h4 class="media-heading">{{professor.nome}}</h4>\n      {{professor.email}}\n    </div>\n  </div>\n</card>\n')}]);var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),AlunoService=function(){function e(t){_classCallCheck(this,e);var n=firebase.database().ref().child("alunos");this.alunos=t(n)}return e.$inject=["$firebaseArray"],_createClass(e,[{key:"listAlunos",value:function(){return this.alunos}},{key:"getAluno",value:function(e){var t=this.alunos.$getRecord(e);return t?t.dataNascimento=convertNumberToDate(t.dataNascimento):null,t}},{key:"addAluno",value:function(e){return e.dataNascimento=e.dataNascimento.getTime(),this.alunos.$add(e),this.listAlunos()}},{key:"editAluno",value:function(e){return e.dataNascimento=e.dataNascimento.getTime(),this.alunos.$save(e),this.listAlunos()}},{key:"deleteAluno",value:function(e){return this.alunos.$remove(e),this.listAlunos()}}]),e}();angular.module("app").service("alunoService",AlunoService);var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),AulaService=function(){function e(t){_classCallCheck(this,e);var n=firebase.database().ref().child("aulas");this.aulas=t(n)}return e.$inject=["$firebaseArray"],_createClass(e,[{key:"list",value:function(){return this.aulas}},{key:"get",value:function(e){var t=this.aulas.$getRecord(e);return t?t.data=convertNumberToDate(t.data):null,t}},{key:"add",value:function(e){return e.data=e.data.getTime(),this.aulas.$add(aluno),this.list()}},{key:"edit",value:function(e){return e.data=e.data.getTime(),this.aulas.$save(e),this.list()}}]),e}();angular.module("app").service("aulaService",AulaService);var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),ProfessorService=function(){function e(t){_classCallCheck(this,e);var n=firebase.database().ref().child("professores");this.professores=t(n)}return e.$inject=["$firebaseArray"],_createClass(e,[{key:"list",value:function(){return this.professores}},{key:"add",value:function(e){return this.professores.$add(e),this.list()}},{key:"remove",value:function(e){return this.professores.$remove(e),this.list()}}]),e}();angular.module("app").service("professorService",ProfessorService);var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),UsuarioService=function(){function e(t,n,a){_classCallCheck(this,e);var o=firebase.database().ref().child("usuarios");this.usuarios=t(o),this.firebaseObjectService=n,this.authService=a}return e.$inject=["$firebaseArray","$firebaseObject","auth"],_createClass(e,[{key:"list",value:function(){return this.usuarios}},{key:"get",value:function(e){e||(e=this.authService.uid);var t=firebase.database().ref().child("usuarios").child(e);return this.firebaseObjectService(t)}},{key:"add",value:function(e){return this.usuarios.$add(e),this.list()}},{key:"edit",value:function(e){return this.usuarios.$save(e),this.list()}},{key:"remove",value:function(e){return this.usuarios.$remove(e),this.list()}}]),e}();angular.module("app").service("usuarioService",UsuarioService);
//# sourceMappingURL=../maps/scripts/app-1561dbe6eb.js.map
