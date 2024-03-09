<?php


use Hoochicken\Datagrid\Datagrid;

class HomeController implements \php\ContentControllerInterface\ContentControllerInterface
{
    private $view;
    private $router;
    private array $content = [];
    private string $main;

    public function __construct(View $view, AltoRouter $router)
    {
        $this->view = $view;
        $this->router = $router;
    }

    /**
     *
     */
    public function displayAction()
    {
        // include stuff
        require_once __DIR__ . '/../../php/Csv.php';

        // load riddles by csv
        $csv = file_get_contents('data/techniques.csv');
        $csv = new Csv($csv, ';');
        $datagrid = new Datagrid();
        $params = [
            'data' => $csv->getAll(),
            'datagrid' => $datagrid,
        ];
        $this->content['main'] = $this->view->render(__DIR__ . '/html/index.php', $params);
        $this->main = $this->view->render(__DIR__ . '/html/index.php', $params);



        //$this->content['strRiddleNew'] = $this->objModel->getRiddleRand();
    }

    public function getContent(): array
    {
        return $this->content;
    }

    public function getMain(): string
    {
        return $this->main;
    }
}