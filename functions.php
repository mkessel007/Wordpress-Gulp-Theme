<?php
	add_filter( 'show_admin_bar', '__return_false' );
	// Website Styles
	function theme_styles() {
		wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/dist/components/bootstrap/dist/css/bootstrap.min.css');
		wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/dist/components/font-awesome/css/font-awesome.min.css');
		wp_enqueue_style( 'owl-carousel', get_template_directory_uri() . '/dist/components/owl-carousel2/dist/assets/owl.carousel.min.css');
		wp_enqueue_style( 'animate', get_template_directory_uri() . '/dist/components/animate.css/animate.min.css');
		wp_enqueue_style( 'maincss', get_template_directory_uri() . '/dist/css/styles.min.css');

	} add_action( 'wp_enqueue_scripts', 'theme_styles' );

	// Website Scripts
	function theme_scripts() {
		wp_enqueue_script( 'jquery', get_template_directory_uri() . '/dist/components/jquery/dist/jquery.min.js');
		wp_enqueue_script( 'bootstrapjs', get_template_directory_uri() . '/dist/components/bootstrap/dist/js/bootstrap.min.js');
		wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/dist/components/modernizr/modernizr.js');
		wp_enqueue_script( 'owljs', get_template_directory_uri() . '/dist/components/owl-carousel2/dist/owl.carousel.min.js');
		wp_enqueue_script( 'mainjs', get_template_directory_uri() . '/dist/js/front-end.min.js');
	} add_action( 'wp_enqueue_scripts', 'theme_scripts' );

	add_theme_support( 'menus' );
	add_theme_support( 'post-thumbnails' );
