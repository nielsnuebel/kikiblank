<?php
/**
 * EDEKA
 *
 * @package     Joomla.Site
 * @subpackage  Templates.edeka
 *
 * @author      Niels Nübel <niels@niels-nuebel.de>
 * @copyright   Copyright (c) 2018 edeka
 * @license     GNU General Public License version 2 or later
 */

defined('_JEXEC') or die;

$app             = JFactory::getApplication();
$doc             = JFactory::getDocument();
$user            = JFactory::getUser();
$this->language  = $doc->language;
$this->direction = $doc->direction;

// Getting params from template
$params = $app->getTemplate(true)->params;

// Template Params
$tpath              = $this->baseurl . '/templates/' . $this->template;

// Reset Generator tag
$this->setGenerator(null);

// Fix Cache Problems
$modified_css = filemtime(__DIR__ . '/assets/css/style.css');

// Add Stylesheets
$doc->addStyleSheet($tpath . '/assets/css/style.css', array('version' => $modified_css));

$doc->setMetaData('viewport', 'width=device-width, user-scalable=yes, initial-scale=1');
$doc->setMetaData('format-detection', 'telephone=no');
?>
<!DOCTYPE html>
<html lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <jdoc:include type="head"/>
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-md-6">Kiki</div>
        <div class="col-md-6">Niels</div>
    </div>
</div>
<jdoc:include type="modules" name="debug"/>
</body>
</html>
