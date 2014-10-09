<?php get_header(); ?>
	<?php if(have_posts()) : ?>
		<?php while(have_posts()) : the_post(); ?>
			<div class="col-md-12 main-container">
				<h1><?php the_title() ?></h1>
				<ul class="clearfix">
					<li id="author">Written By<span> <?php the_author_meta('nickname') ?> </span></li>
					<li id="comments"><?php comments_number() ?></li>
					<li id="date"><?php the_date() ?></li>
				</ul>
				<?php the_content() ?>
				<?php comments_template(); ?>
			</div>
		<?php endwhile; ?>
	<?php endif; ?>
<?php get_footer(); ?>
