<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Réinitialisation du mot de passe</title>
</head>
<body>
    <h2>Bonjour {{ $user->nom_complet ?? 'Utilisateur' }},</h2>

    <p>
        Vous avez demandé la réinitialisation de votre mot de passe.
    </p>

    <p>
        Cliquez sur le bouton ci-dessous pour définir un nouveau mot de passe :
    </p>

    <p>
        <a href="{{ $resetUrl }}"
           style="display:inline-block;padding:10px 20px;
                  background-color:#f97316;color:white;
                  text-decoration:none;border-radius:5px;">
            Réinitialiser mon mot de passe
        </a>
    </p>

    <p>
        Si vous n’avez pas demandé cette réinitialisation, ignorez simplement cet email.
    </p>

    <p>
        Cordialement,<br>
        <strong>L’équipe Khdamlink</strong>
    </p>
</body>
</html>
