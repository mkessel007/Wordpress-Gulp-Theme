<?php get_header(); ?>

<div class="primary-wrapper">
  <!-- CONTENT WRAPPING -->
  <div class="col-md-12">
		<?php include (TEMPLATEPATH . '/includes/sidebar.inc.php'); ?>
    <div id="content" class="col-md-8 posts projects">
      <h2><?php echo $wp_query->found_posts; ?> Search Results For: "<?php the_search_query(); ?>"</h2>
      <?php while (have_posts()) : the_post(); ?>
        <a href="<?php the_permalink() ?>">
          <h3><?php the_title() ?></h3>
          <p><?php the_excerpt() ?></p>
        </a>

      <?php endwhile; ?>
  </div>
<?php get_footer(); ?>
