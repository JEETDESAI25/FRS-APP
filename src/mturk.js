import AWS from 'aws-sdk';

// API
const mturk = new AWS.MTurk({
	accessKeyId: 'YOUR_ACCESS_KEY',
	secretAccessKey: 'YOUR_SECRET_KEY',
	region: 'us-east-1',
});

// HIT
mturk.createHIT(
	{
		MaxAssignments: 1,
		AutoApprovalDelayInSeconds: 86400,
		LifetimeInSeconds: 172800,
		AssignmentDurationInSeconds: 600,
		Reward: '0.50',
		Title: 'Complete a survey',
		Description:
			'Answer a few questions about your experience with our website',
		Question: `<QuestionForm xmlns="http://mechanicalturk.amazonaws.com/AWSMechanicalTurkDataSchemas/2005-10-01/QuestionForm.xsd">
        <Overview>
            <Title>Complete a survey</Title>
            <FormattedContent><![CDATA[
                <p>Answer a few questions about your experience with our website.</p>
            ]]></FormattedContent>
        </Overview>
        <Question>
            <QuestionIdentifier>experience</QuestionIdentifier>
            <DisplayName>How was your experience with our website?</DisplayName>
            <IsRequired>true</IsRequired>
            <QuestionContent>
                <FormattedContent><![CDATA[
                    <p>On a scale of 1 to 5, how would you rate your experience with our website?</p>
                ]]></FormattedContent>
            </QuestionContent>
            <AnswerSpecification>
                <SelectionAnswer>
                    <MinSelectionCount>1</MinSelectionCount>
                    <MaxSelectionCount>1</MaxSelectionCount>
                    <StyleSuggestion>radiobutton</StyleSuggestion>
                    <Selections>
                        <Selection>
                            <SelectionIdentifier>1</SelectionIdentifier>
                            <Text>1 - Very poor</Text>
                        </Selection>
                        <Selection>
                            <SelectionIdentifier>2</SelectionIdentifier>
                            <Text>2 - Poor</Text>
                        </Selection>
                        <Selection>
                            <SelectionIdentifier>3</SelectionIdentifier>
                            <Text>3 - Average</Text>
                        </Selection>
                        <Selection>
                            <SelectionIdentifier>4</SelectionIdentifier>
                            <Text>4 - Good</Text>
                        </Selection>
                        <Selection>
                            <SelectionIdentifier>5</SelectionIdentifier>
                            <Text>5 - Very good</Text>
                        </Selection>
                    </Selections>
                </SelectionAnswer>
            </AnswerSpecification>
        </Question>
    </QuestionForm>`,
	},
	(err, data) => {
		if (err) {
			console.log(err, err.stack);
		} else {
			console.log(data.HIT.HITId);
		}
	}
);

// GET answers provided by workers.
const params = {
	AssignmentId: 'ASSIGNMENT_ID',
};

mturk.getAssignment(params, function (err, data) {
	if (err) {
		console.log(err, err.stack);
	} else {
		const answers = data.Answer;
		console.log(answers);
	}
});
