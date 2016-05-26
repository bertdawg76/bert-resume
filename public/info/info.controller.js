angular.module('bertResume').controller('infoCtrl', function($stateParams, $scope, Info, Skill){
  var vm = this;
  init();
  initAlso();
  function init(){
    Info.getAllInfo().then(function(project){
      console.log(project);
      vm.projects = project.data;
    });
  }

  function initAlso(){
    Skill.getAllSkill().then(function(skills){
      console.log(skills);
      vm.skills = skills.data;
    })
  }
  Info.getOneInfo($stateParams.id)
      .then(function (response) {
        console.log(response);
        $scope.project = response.data;

      });

  /*Skill.getOneSkill($stateParams.id)
      .then(function (response) {
        console.log(response);
        $scope.skill = response.data;

      })*/
});