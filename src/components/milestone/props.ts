export interface Props {
  
  /**
   * Title of the experience. It can be a job title, a project name, or the name of an award or certificate.
   */
  title: string;
  
  /**
   * Dates of the milestone. It can be a single date (e.g. "Jul 2024") or a range of dates (e.g. "Jul 2024 - Present").
   */
  dates: string;

  /**
   * Name of the company or organization. It can also be used to describe the issuer of an award or certificate.
   */
  company: string;

  /**
   * Link to the company's website, project, certificate, etc.
   */
  link?: string;

  /**
   * Description of the experience.
   */
  description?: string;

  
  /**
   * Logo of the company or organization.
   */
  logo?: string;
 
  /**
   * Tags to describe the experience (e.g. technologies, skills, etc.)
   */
  tags?: string[];
}
