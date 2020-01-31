const gulp=require("gulp"),concat=require("gulp-concat"),babel=require("gulp-babel"),autoprefixer=require("gulp-autoprefixer"),sass=require("gulp-sass"),csscomb=require("gulp-csscomb"),cleanCSS=require("gulp-clean-css");gulp.task("js",(function(){return gulp.src("_include/js/main.js").pipe(concat("main.min.js")).pipe(babel({presets:["babili"]})).pipe(gulp.dest("_include/js"))})),gulp.task("css",(function(){return gulp.src("_include/css/main.scss").pipe(sass().on("error",sass.logError)).pipe(autoprefixer({browsers:["last 2 versions"],cascade:!1})).pipe(csscomb()).pipe(concat("main.min.css")).pipe(cleanCSS()).pipe(gulp.dest("_include/css"))})),gulp.task("default",gulp.series("js","css",(function(s){gulp.watch("_include/js/main.js",gulp.task("js")),gulp.watch("_include/css/main.scss",gulp.task("css")),s()})));