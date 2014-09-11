<?php get_header(); ?>
	<?php if(have_posts('cat=-3,-1')) : ?>
		<?php while(have_posts()) : the_post(); ?>
		<?php endwhile; ?>
	<?php endif; ?>
<?php get_footer(); ?>
