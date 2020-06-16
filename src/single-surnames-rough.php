<?php get_header();?>
<?php while ( have_posts() ) : the_post(); ?>
  <?php
    $images = get_surname_rough_images(get_the_ID());

    $th_digit_text = carbon_get_theme_option('th_digit_text');
    $th_digit_title = carbon_get_theme_option('th_digit_title');
    $th_digit_btext = carbon_get_theme_option('th_digit_btext');
    $th_digit_blink = carbon_get_theme_option('th_digit_blink');

    $title = get_the_title();

  ?>
	<main id="main">
      <section class="surname-title-section rough" style="background-image: linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%), url(<?=get_template_directory_uri()?>/images/bg-surname-title.png);">
        <div class="breadcrumbs">
          <div class="container">
            <?php show_breadcrumbs(); ?>
          </div>
        </div>
        <div class="container">
          <div class="inner-wrapper">
            <div class="block-content">
              <?php the_title('<h1>','</h1>'); ?>
            </div>
          </div>
        </div>
      </section>
      <section class="crest-section">
        <div class="container">
          <div class="row justify-content-between">
            <?php if($images){ ?>
              <div class="block-slider col-12 col-lg-6 col-xl-4">
                <h2><?=__('Family Crest','coa-admin')?></h2>
                <div id="crestSlider" class="crest-slider">
                  <?php foreach ($images as $i => $item) { ?>
                    <div class="item" data-id="description-<?=$i?>">
                      <h3><?=$item['display_name']?></h3>
                      <span class="location"><?=$item['region']?></span>
                      <picture>
                        <?php if($item['img_link']):?>
                          <img src="<?=$item['img_link']?>" alt="<?=$title.' '.$i?>" data-rating="<?=$item['img_rating']?>">
                        <?php else:?>
                          <img src="<?php echo get_stylesheet_directory_uri() ?>/images/blank-blazon.png" border="0" width="550" height="712" orgWidth="550" orgHeight="712" usemap="#image-maps-2020-02-03-092933" alt="" />
                        <?php endif;?>
                      </picture>
                    </div>
                  <?php } ?>

                </div>
                <span class="pagingInfo"></span>
              </div>
            <?php } ?>
            <div class="block-content col-12 col-lg-6 col-xl-7">
              <h2><?=__('Blazon description','coa-admin')?></h2>
              <div class="surname-rough-descriptions">
                <?php foreach ($images as $i => $item) { ?>
                    <div class="surname-rough-desc<?=($i==0)?' active':''?>" id="description-<?=$i?>">
                      <?=apply_filters('the_content',$item['blazon'])?>
                    </div>
                  <?php } ?>
              </div>
              <div class="digital-wrapper">
                <picture>
                  <img src="<?=get_template_directory_uri()?>/images/digital.svg" alt="">
                </picture>
                <div class="content">
                  <?=apply_filters('the_content',$th_digit_text)?>
                  <?php
                    echo add_to_cart_digitalization(206236);
                  ?>
                </div>
              </div>
              <span class="research"><?=$th_digit_title?>
                  <?php if($th_digit_btext){ ?>
                    <a href="<?=$th_digit_blink?>"><?=$th_digit_btext?></a>
                  <?php } ?>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section class="contact-section">
        <div class="container">
          <div class="row justify-content-between">
            <div class="block-content col-12 col-md-6 col-xl-8">
              <picture>
                <img src="<?=get_template_directory_uri()?>/images/contact-section.svg" alt="">
              </picture>
              <h2>Receive free information about this surname, family, or coat of arms.</h2>
            </div>
            <div class="block-form col-12 col-md-6 col-xl-4">
              <?//=do_shortcode('[contact-form-7 id="206626" title="Surname Rough"]')?>
              <!-- Begin Mailchimp Signup Form -->
              <div id="mc_embed_signup">
                <form action="https://coadb.us20.list-manage.com/subscribe/post-json?u=7a2158c2be23104f65aaff055&amp;id=e388165e0f&c=?" method="get" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll">
                    <div class="mc-field-group">
                      <label for="mce-FNAME">First and Last Name </label>
                      <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
                    </div>
                    <div class="mc-field-group size1of2">
                      <label for="mce-MMERGE3-month">Year of Birth  <span class="asterisk">*</span></label>
                      <div class="datefield">
                        <span class="subfield monthfield"><input class="datepart required" type="text" pattern="[0-9]*" value="" placeholder="MM" size="2" maxlength="2" name="MMERGE3[month]" id="mce-MMERGE3-month"></span>
                        <span class="subfield dayfield"><input class="datepart required" type="text" pattern="[0-9]*" value="" placeholder="DD" size="2" maxlength="2" name="MMERGE3[day]" id="mce-MMERGE3-day"></span>
                        <span class="subfield yearfield"><input class="datepart required" type="text" pattern="[0-9]*" value="" placeholder="YYYY" size="4" maxlength="4" name="MMERGE3[year]" id="mce-MMERGE3-year"></span>
                        <span class="small-meta nowrap">( mm / dd / yyyy )</span>
                      </div>
                    </div>
                    <div class="mc-field-group">
                      <label for="mce-MMERGE2">Country of birth  <span class="asterisk">*</span></label>
                      <input type="text" value="" name="MMERGE2" class="required" id="mce-MMERGE2">
                    </div>
                    <div class="mc-field-group">
                      <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span></label>
                      <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                    </div>
                    <div id="mce-responses" class="clear">
                      <div class="response" id="mce-error-response" style="display:none"></div>
                      <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_7a2158c2be23104f65aaff055_e388165e0f" tabindex="-1" value=""></div>
                    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                  </div>
                </form>
              </div>

              <!--End mc_embed_signup-->
            </div>
            <?php
              $prev_post = get_previous_post();
              $next_post = get_next_post();
          
              $url = get_the_permalink();
              $text = get_the_title();

              $share_img = get_surname_rough_first_image(get_the_ID());
              
            ?>
            <div class="block-share-history col-12">
              <div class="block-prev">
                <?php if($prev_post){ ?>
                  <?php $surname = carbon_get_post_meta($prev_post->ID,'surname'); ?>
                  <a href="<?=get_the_permalink($prev_post->ID)?>">
                    <?php
                      $image = get_surname_rough_first_image($prev_post->ID);
                      if($image):
                    ?>
                          <img src="<?=$image?>" alt="<?=$surname?>">
                    <?php else:?>
                          <img src="<?php echo get_stylesheet_directory_uri() ?>/images/blank-blazon.png" alt="<?=$surname?>" />
                    <?php endif;?>
                    <p><?=__('Prew','coa-admin')?><br><span><?=$surname?></span></p>
                  </a>
                <?php } ?>
              </div>
              <div class="block-social">
              <h3><?=__('Share your history ','coa-admin')?></h3>
                <ul>
                <?php if(isset($share_img)){ ?>
                    <li><a href="http://pinterest.com/pin/create/button/?url=<?=urlencode($url)?>&media=<?=urlencode($share_img)?>&description=<?=$text ?>" onclick="window.open(this.href, '', 'toolbar=0, status=0, width=580, height=500'); return false" target="_parent" rel="nofollow"><i class="icon-pin"></i></a></li>
                  <?php } ?>
                <li><a href="https://www.facebook.com/sharer/sharer.php?u=<?=$url?>&quote=<?=$text ?>" onclick="window.open(this.href, '', 'toolbar=0, status=0, width=548, height=325'); return false" target="_parent" rel="nofollow"><i class="icon-facebook-2"></i></a></li>
                <li><a href="http://twitter.com/share?text=<?=$text ?>&url=<?=$url?>"  onclick="window.open(this.href, '', 'toolbar=0, status=0, width=548, height=325'); return false" target="_parent" rel="nofollow"><i class="icon-twitter"></i></a></li>
                </ul>
              </div>
              <div class="block-next">
                <?php if($next_post){ ?>
                  <?php $surname = carbon_get_post_meta($next_post->ID,'surname'); ?>
                  <a href="<?=get_the_permalink($next_post->ID)?>">
                    <p><?=__('Next','coa-admin')?><br><span><?=$surname?></span></p>
                    <?php
                      $image = get_surname_rough_first_image($next_post->ID);
                      if($image):
                    ?>
                          <img src="<?=$image?>" alt="<?=$surname?>">
                    <?php else:?>
                          <img src="<?php echo get_stylesheet_directory_uri() ?>/images/blank-blazon.png" alt="<?=$surname?>" />
                    <?php endif;?>
                  </a>
                <?php } ?>
              </div>
            </div>

          </div>
        </div>
      </section>
      <?php get_template_part('template-parts/info');?>
    </main>
<?php endwhile; ?>

<?php get_footer();?>