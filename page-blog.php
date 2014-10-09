<?php
	/*
		Template Name: Blog Template
	*/
 ?>

<?php get_header(); ?>

<div class="primary-wrapper">
	<!-- CONTENT WRAPPING -->
	<div class="col-md-12">
		<?php include (TEMPLATEPATH . '/includes/sidebar.inc.php'); ?>
		<div id="content" class="col-md-8 posts projects">
			<?php
				$args = array( 'numberposts' => -1);
				$posts= get_posts( $args );
				if ($posts) { foreach ( $posts as $post ) { setup_postdata($post);
			?>
			<article class="post content">
				<header>
					<div class="the_img">
						<?php the_post_thumbnail(); ?>
					</div>
					<h3><?php the_title(); ?></h3>
				</header>
				<div class="excerpt">
					<?php the_excerpt(); ?>
				</div>
				<footer>
					<a href="<?php the_permalink(); ?>" class="continue-reading">Keep reading</a>
					<!-- <ul>
						<?php the_category(); ?>
					</ul> -->
				</footer>
			</article>
			<?php }} ?>
		</div>
	</div>
<?php get_footer(); ?>
