module.exports = function(grunt) {

    // Configuração das tarefas
    grunt.initConfig({
      // Lê o arquivo package.json para acessar informações do projeto
      pkg: grunt.file.readJSON('package.json'),
  
      // Configuração da tarefa LESS
      less: {
        development: {
          files: {
            'dist/styles.css': 'src/styles.less' // Compila src/styles.less para dist/styles.css
          }
        }
      },
  
      // Configuração da tarefa Uglify
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          files: {
            'dist/scripts.min.js': ['src/scripts.js'] // Comprime src/scripts.js para dist/scripts.min.js
          }
        }
      }
    });
  
    // Carrega os plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Registra a(s) tarefa(s) padrão
    grunt.registerTask('default', ['less', 'uglify']);
  
  };
  