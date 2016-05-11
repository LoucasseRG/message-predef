$('#QuickReply').find('.submitUnit').children('input').eq(1).after('<a type="button" class="button primary boutonMessage" data-msg="Salut,<br><br>Tu n\'as pas les [B][COLOR=rgb(0,102,102)]conditions requises[/COLOR][/B] pour proposer ce genres de services.<br>Petit rappel sur les conditions :<br>[LIST]<br>[*]1 000 messages. [FA]fa-comments-o[/FA]<br>[*]500 j\'aimes. [FA]fa-thumbs-o-up[/FA]<br>[*]6 mois d\'ancienneté. [FA]fa-calendar-times-o[/FA]<br>[/LIST]<br>">Conditions</a>');
$('#QuickReply').find('.submitUnit').children('input').eq(1).after('<a type="button" class="button primary boutonMessage" data-msg="Salut,<br><br>Il est [B][COLOR=rgb(0,102,102)]illégal[/COLOR][/B] de proposer ce genre de contenu sur le forum.<br>Petit rappel du règlement : [URL=\'https://realitygaming.fr/help/terms/#forum\'][B]ici[/B][/URL].<br>">Illégal</a>');
$('#QuickReply').find('.submitUnit').children('input').eq(1).after('<a type="button" class="button primary boutonMessage" data-msg="Salut,<br><br>Bienvenue sur le forum, si tu as [B][COLOR=rgb(0,102,102)]besoins d\'aide[/COLOR][/B], contacte moi en en [B][COLOR=rgb(0,102,102)]message privé[/COLOR][/B], ou sur [B][COLOR=rgb(0,102,102)]mon profil[/COLOR][/B].<br>">Bienvenue</a>');

$(document).ready(function() {
    $('.boutonMessage').click(function() {
    $('iframe.redactor_textCtrl').contents().find('body').html($(this).data('msg').replace(/\n/g, '<br />'));
    $('iframe.redactor_textCtrl').contents().find('body').select();
    $('iframe.redactor_textCtrl').contents().find('body').focus();
    });
});
