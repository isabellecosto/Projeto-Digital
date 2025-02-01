<?php

namespace App\Console\Commands\Users;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class CreateUsersCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:create-users-command';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        User::updateOrCreate(
        ["email" => "isabelle@digital.com"],
        [
            "name" => "Isabelle",
            "surname" => "Costa",
            "birthdate" => "2006-07-15",
            "email" => "isabelle@digital.com",
            "password" => Hash::make("isa123"),
            "is_admin" => true,
            "is_active" => true,
        ]);
    }
}
