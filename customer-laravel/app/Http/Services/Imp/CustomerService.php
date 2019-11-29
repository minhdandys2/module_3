<?php


namespace App\Http\Services\Imp;


use App\Customer;
use App\Http\Repositories\CustomerRepositoryInterface;
use App\Http\Repositories\RepositoryInterface;
use App\Http\Services\CustomerServiceInterface;

class CustomerService implements CustomerServiceInterface
{
    public $customerRepository;
    public function __construct(CustomerRepositoryInterface $customerRepository)
    {
        $this->customerRepository = $customerRepository;
    }

    public function getAll()
    {
        return $this->customerRepository->getAll();
    }

    public function findById($id)
    {
        return $this->customerRepository->findById($id);
    }

    public function create($obj)
    {
        $customer = new Customer();
        $customer->name = $obj->name;
        $customer->email = $obj->email;
        $customer->address = $obj->address;
        return $this->customerRepository->store($customer);
    }

    public function edit($request, $id)
    {
        $customer = $this->customerRepository->findById($id);
        $customer->name = $request->name;
        $customer->email = $request->email;
        $customer->address = $request->address;
        return $this->customerRepository->store($customer);
    }

    public function delete($id)
    {
        $customer = $this->customerRepository->findById($id);
        $this->customerRepository->delete($customer);
    }
}
