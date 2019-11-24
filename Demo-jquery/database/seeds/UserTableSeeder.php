<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new \App\User();
        $user->name = 'kkk';
        $user->email = 'lkjlhafk@gmail.com';
        $user->password = '11111111';
        $user->save();
    }
}
