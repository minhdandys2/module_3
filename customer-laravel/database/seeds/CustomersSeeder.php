<?php

use Illuminate\Database\Seeder;

class CustomersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $customers = new \App\Customer();
        $customers->name = 'ha';
        $customers->email = 'ha@gmail.com';
        $customers->address = 'nghe an';
        $customers->save();
    }
}
