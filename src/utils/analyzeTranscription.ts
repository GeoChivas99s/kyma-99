function getSeverity(disfluencyPercentage:number) {
    if (disfluencyPercentage < 0.05) {
      return 'Leve';
    } else if (disfluencyPercentage < 0.1) {
      return 'Moderada';
    } else {
      return 'Grave';
    }
  }

function analyzeTranscription(transcription:string) {
    const hesitationPattern = /\b(?:um|uh|er|ah)\b/g;
    const prolongationPattern = /([a-zA-Z])\1{2,}/g;
    const repetitionPattern = /(\b\w+\b)(?:\s+\1)+/g;
  
    const hesitationMatches = (transcription.match(hesitationPattern) || []).length;
    const prolongationMatches = (transcription.match(prolongationPattern) || []).length;
    const repetitionMatches = (transcription.match(repetitionPattern) || []).length;
  
    const totalDisfluencies = hesitationMatches + prolongationMatches + repetitionMatches;
    const totalWords = transcription.split(' ').length;
  
    const disfluencyPercentage = totalDisfluencies / totalWords;
  
    const severity = getSeverity(disfluencyPercentage);
  
    return {
      disfluencyPercentage,
      severity,
      hesitationMatches,
      prolongationMatches,
      repetitionMatches,
    };
  }

  export default analyzeTranscription;