<?php


namespace App\Http\Repositories;


interface CustomerRepositoryInterface extends RepositoryInterface
{
    public function findById($id);
    public function store($obj);
    public function edit($obj);
    public function delete($obj);
}
