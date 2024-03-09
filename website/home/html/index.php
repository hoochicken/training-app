<?php
/** @var array $data **/
/** @var \Hoochicken\Datagrid\Datagrid $datagrid **/
$datagrid->setTableClass('table table-striped table-hover');
?>
<h1><?php echo $strHeadline ?? ''; ?></h1>

<div class="row">
    <div class="col-md-12">
        <?=
        $datagrid->getTable($data);
        ?>
    </div>
</div>