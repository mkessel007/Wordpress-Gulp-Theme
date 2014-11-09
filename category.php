<?php get_header(); ?>

<div class="primary-wrapper">
  <!-- CONTENT WRAPPING -->
  <div class="col-md-12">
    <?php include (TEMPLATEPATH . '/includes/sidebar.inc.php'); ?>
    <div id="content" class="col-md-8 posts projects">
      <h2>Category: <?php single_cat_title(); ?></h2>

      <?php $the_query = new WP_Query( 'cat='.the_category_ID() ); ?>
      <?php while ($the_query -> have_posts()) : $the_query -> the_post(); ?>
      <article class="post content">
        <header>
          <div class="the_img">
            <?php the_post_thumbnail(); ?>
          </div>
          <h2><?php the_title(); ?></h2>
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
      <?php wp_reset_query(); endwhile; ?>
    </div>
  </div>
<?php get_footer(); ?>
