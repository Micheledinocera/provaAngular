export class EngageSearch {

  title: string;
  description: string;
  keywords: string[];
  template: string;
  templates;
  data;

  constructor(outerData: any) {
      const data = outerData.data;
      this.title = data.title;
      this.description = data.description;
      this.keywords = data.keywords;
      this.template = data.template;
      this.templates = outerData.templates ? outerData.templates : {};
  }

  static getDummyEngageSearches() {
    return {
      templates: {
        'Template2': 'CIAONE',
        'Template1': 'TEMPLATEONE'
      },
      data: [
        {
          title: 'Titolo1',
          description: 'asdkjdhaskjfhaskdjfjsa',
          keywords: ['key1', 'key2'],
          template: 'Template2',
        } , {
          title: 'Titolo2',
          description: 'asdkjdhaskjfhaskdjfjsa',
          keywords: ['key3', 'key4'],
          template: 'TemplateHtml'
        }
      ]
    };
  }


  static getDummyEngageSearches2() {
    return  {
      templates: {
        'Template2': 'CIAONE',
        'Template1': 'TEMPLATEONE'
      },
      data: [
        {
          title: 'Titolo21',
          description: 'asdkjdhaskjfhaskdjfjsa2',
          keywords: ['key12', 'key22'],
          template: 'Template1'
        } , {
          title: 'Titolo22',
          description: 'asdkjdhaskjfhaskdjfjsa2',
          keywords: ['key32', 'key42'],
          template: 'TemplateHtml2'
        }
      ]
    };
  }
}
