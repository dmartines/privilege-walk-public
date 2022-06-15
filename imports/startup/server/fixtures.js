import Questions from '../../api/questions/questions';
import Questionnaires from '../../api/questionnaires/questionnaires';

var questionList = [
    "If you are a human animal, take one step forward.",
    "If you are right-handed, take one step forward.",
    "If English is your first language, take one step forward.",
    "If one or both of your parents have a college degree, take one step forward.",
    "If you can find Band-Aids at mainstream stores designed to blend in with or match your skin tone, take one step forward.",
    "If you rely, or have relied, primarily on public transportation, take one step back.",
    "If you have worked with people you felt were like yourself, take one step forward",
    "If you constantly feel unsafe walking alone at night, take one step back.",
    "If your household employs help as servants, gardeners, etc., take one step forward.",
    "If you are able to move through the world without fear of sexual assault, take one step forward.",
    "If you studied the culture of your ancestors in elementary school, take one step forward.",
    "If you were ever made fun of or bullied for something you could not change or was beyond your control, take one step back.",
    "If your family ever left your homeland or entered another country not of your own free will, take one step back.",
    "If you would never think twice about calling the police when trouble occurs, take one step forward.",
    "If you have ever been able to play a significant role in a project or activity because of a talent you gained previously, take one step forward.",
    "If you can show affection for your romantic partner in public without fear of ridicule or violence, take one step forward.",
    "If you ever had to skip a meal or were hungry because there was not enough money to buy food, take one step back.",
    "If you feel respected for your academic performance, take one step forward.",
    "If you have a physically visible disability, take one step back.",
    "If you have an invisible illness or disability, take one step back.",
    "If you were ever discouraged from an activity because of race, class, ethnicity, gender, disability, or sexual orientation, take one step back.",
    "If you ever tried to change your appearance, mannerisms, or behavior to fit in more, take one step back.",
    "If you have ever been profiled by someone else using stereotypes, take one step back.",
    "If you feel good about how your identities are portrayed by the media, take one step forward.",
    "If you were ever accepted for something you applied to because of your association with a friend or family member, take one step forward.",
    "If you have health insurance take one step forward.",
    "If you have ever been spoken over because you could not articulate your thoughts fast enough, take one step back.",
    "If someone has ever spoken for you when you did not want them to do so, take one step back.",
    "If there was ever substance abuse in your household, take one step back.",
    "If you come from a single-parent household, take one step back.",
    "If you live in an area with crime and drug activity, take one step back.",
    "If someone in your household suffered or suffers from mental illness, take one step back.",
    "If you have been a victim of sexual harassment, take one step back.",
    "If you were ever uncomfortable about a joke related to your race, religion, ethnicity, gender, disability, or sexual orientation but felt unsafe to confront the situation, take one step back.",
    "If you are never asked to speak on behalf of a group of people who share an identity with you, take one step forward.",
    "If you can make mistakes and not have people attribute your behavior to flaws in your racial or gender group, take one step forward.",
    "If you went to college, take one step forward.",
    "If you have more than fifty books in your household, take one step forward.",
    "If your parents told you that you can be anything you want to be, take one step forward."
];

if (Meteor.isServer) {
    Meteor.startup(() => {
        var questionSize = Questions.find().count();
        if (questionSize === 0) {
            //Created startup list of questions
            let questionnaireList = [];
            for (var i = 0; i < questionList.length; i++) {
                let questionId = Questions.insert({
                    text: questionList[i]
                });
                questionnaireList.push(questionId);
            }
            let qId = Questionnaires.insert({
                name: "main-questionnaire",
                question_ids: questionnaireList
            });
            console.log("STARTUP questionnaire added with Id" + qId);
        } else {
            console.log("STARTUP questionnaire has " + questionSize + " questions");
        }
    });
}
