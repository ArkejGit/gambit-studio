<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail_to = "biuro@gambitstudio.pl";
    # Sender Data    
    $post = json_decode(file_get_contents('php://input'));
    $subject = trim($post->subject);
    $name    = str_replace(array(
        "\r",
        "\n"
    ), array(
        " ",
        " "
    ), strip_tags(trim($post->name)));
    $email   = filter_var(trim($post->email), FILTER_SANITIZE_EMAIL);
    $phone   = trim($post->phone);
    $message = trim($post->message);
    if (empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($subject) OR empty($message)) {
        # kod 400
        http_response_code(400);
        echo "Proszę wypełnić wszystkie pola formularza.";
        exit;
    }
    $content = "Name: $name\n";
    $content .= "Email: $email\n";
    $content .= "Phone: $phone\n\n";
    $content .= "Message:\n$message\n";
    # nagłówek wiadomości.
    $headers = "From: $name &lt;$email&gt;";
    # Wysłanie wiadomości.
    $success = mail($mail_to, $subject, $content, $headers);
    if ($success) {
        # kod 200 powodzenie.
        http_response_code(200);
        echo "Dziękujemy! Wiadomość została wysłana pomyślnie.";
    } else {
        # kod 500 błąd serwera.
        http_response_code(500);
        echo "Coś poszło nie tak - wiadomość nie została wysłana";
    }
  } else {
    # kod 403 
    http_response_code(403);
    echo "Nie można wysłać wiadomości";
  }
?> 