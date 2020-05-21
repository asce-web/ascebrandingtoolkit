<?php

namespace Drupal\asce_custom\Plugin\Block;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Session\AccountInterface;

/**
 * Provides a block with a simple text.
 *
 * @Block(
 *   id = "asce_custom_block",
 *   admin_label = @Translation("User Options"),
 * )
 */
class UserOptions extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function build() {
    $user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
    $name = $user->get('field_first_name')->getValue()[0]['value'];
    $uid= $user->get('uid')->value;
    if (!empty($uid)) {
        return array (
            '#type' => 'markup',
            '#markup' => '<div id="user" class="clearfix">
    <ul>
      <li>You are logged in as '.$name.' || <a href="/user/'.$uid.'/edit" class="logo_lightbox">Change password</a>  || <a href="/user/logout">Logout</a> </li>
    </ul>
  </div>',
        );
      }
    }
}