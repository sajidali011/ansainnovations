// bootstrap/app.php mein ye add karo
// (poori file replace mat karo — bas $middleware->redirectGuestsTo(...) line
// apne existing ->withMiddleware(function (Middleware $middleware) { ... }) ke andar daal do)

use Illuminate\Foundation\Configuration\Middleware;

->withMiddleware(function (Middleware $middleware) {
    // Guest (not logged in) admin ko 'admin.login' route pe bhejo, 'login' pe nahi
    $middleware->redirectGuestsTo(fn () => route('admin.login'));

    // ... baaki tumhara existing middleware config yahi rahega
})
