<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Projet Terminé</title>
</head>
<body>
  <p>Bonjour {{ $user->nom_complet }},</p>

  <p>
    Nous avons le plaisir de vous informer que votre projet
    <strong>{{ $project->title }}</strong> est désormais
    <strong>terminé</strong>.
  </p>

  <p>
    Vous pouvez maintenant consulter les détails de votre projet sur la plateforme.
  </p>

  <p>
    Cordialement,<br>
    L’équipe <strong>KhdamLink</strong>
  </p>
</body>
</html>
