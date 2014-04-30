
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		compass: {
			dev: {
				options: {
					sassDir: "./design/sitebuild_v2/sass",
					cssDir: "./design/sitebuild_v2/css"
				}
			},

			dist: {
				options: {
					sassDir: "./design/sitebuild_v2/sass",
					cssDir: "./design/sitebuild_v2/css",
					environment: "production"
				}
			}
		},

		watch: {
			compass: {
				options: {
					atBegin: true
				},
				files: ["design/sitebuild_v2/sass/*.scss"],
				tasks: ["compass:dev"]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-compass");
	grunt.loadNpmTasks("grunt-contrib-watch");
};
