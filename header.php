<!--

Hi Guys!

Built with love and passion by the team at Indee
http://indee.io
@weareindee

<3

-->


<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->
	<head>
		<meta charset="utf-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="description" content=""/>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>

		<title>
			<?php
				if ( is_category() ) {
					echo 'Category Archive for &quot;'; single_cat_title(); echo '&quot; | '; bloginfo( 'name' );
				} elseif ( is_tag() ) {
					echo 'Tag Archive for &quot;'; single_tag_title(); echo '&quot; | '; bloginfo( 'name' );
				} elseif ( is_archive() ) {
					wp_title(''); echo ' Archive | '; bloginfo( 'name' );
				} elseif ( is_search() ) {
					echo 'Search for &quot;'.wp_specialchars($s).'&quot; | '; bloginfo( 'name' );
				} elseif ( is_home() || is_front_page() ) {
					bloginfo( 'name' ); echo ' | '; bloginfo( 'description' );
				}  elseif ( is_404() ) {
					echo 'Error 404 Not Found | '; bloginfo( 'name' );
				} elseif ( is_single() ) {
					wp_title('');
				} else {
					echo wp_title( ' | ', false, right ); bloginfo( 'name' );
				}
			?>
		</title>
		<?php wp_head(); ?>
	</head>

	<body>
		<?php include (TEMPLATEPATH . '/includes/nav.inc.php'); ?>
