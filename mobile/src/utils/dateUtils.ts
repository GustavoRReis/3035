export const formatReleaseDate = (dateString: string): string => {
  if (!dateString) return 'Data não disponível';
  
  const date = new Date(dateString);
  const months = [
    'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
    'jul', 'ago', 'set', 'out', 'nov', 'dez'
  ];
  
  return `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
};

export const formatYear = (dateString: string): string => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return date.getFullYear().toString();
}; 
